require('dotenv').config();
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';
import cookieParser from 'cookie-parser';
import http from 'http';
import bodyParser from 'body-parser';
const configurations = {
  production: { ssl: true, port: process.env.PORT, hostname: '' },
  development: { ssl: false, port: 4000, hostname: 'localhost' }
};

const app = express();
const environment = app.get('env') || 'production';
const config = configurations[environment];
const PORT = config.port;

const schemaArray = fileLoader(path.join(__dirname, './schema'));
const resolversArray = fileLoader(path.join(__dirname, './resolvers'));

app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use('/', require('./routes/index'));

// development error handler
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send({ message: err.message, error: err});
  });
}

const server = new ApolloServer({
  typeDefs: mergeTypes(schemaArray, { all: true }),
  resolvers: mergeResolvers(resolversArray),
  engine: {
    apiKey: process.env.APPOLO_ENGINE_KEY
  },
  context: ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return {};
    } else {
      // check from req
      let authorization = req.headers.authorization || '';
      return { authorization};
    }
  },
  subscriptions: {
    onConnect: (connectionParams, webSocket) => {
      console.log('A client connected 😊');
      if (connectionParams.authorization) {
        return {
          currentUser: 'userInContext'
        };
      }
    },
    onDisconnect: (webSocket, context) => {
      console.log('A client disconnect 😐');
    }
  },
  introspection: true
});

server.applyMiddleware({ app});
var httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${server.graphqlPath}
🚀 Subscriptions ready at ws${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${server.graphqlPath}`);
});
