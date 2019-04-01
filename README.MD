# Firebase GraphQL backend
![firebase graphql](https://cdn-images-1.medium.com/max/1600/1*YbcWKaWi7QqR0bKafpE1Dw.png)

## Getting started

### Introduction 

Welcome!


### What is Express JS?

Express is a minimalist and flexible Web Node.js infrastructure that provides a robust feature set for web and mobile applications. Thanks to a host of HTTP utility methods and middleware available to you, creating a robust API is fast and easy.


### What is Firebase?

Firebase is a set of hosting services for any type of application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C ++ ...). It offers hosting in NoSQL and in real time databases, content, social authentication (Google, Facebook, Twitter and Github), and notifications, or services, such as for example a server of real time communication. Launched in 2011 under the name of Envolve, by Andrew Lee and by James Templin, the service is bought by Google in October 2014. It belongs today to the parent company of Google: Alphabet. All implementation and server management of Firebase is the sole responsibility of the company Alphabet. Applications that use Firebase integrate a library that allows for various possible interactions.

### What is GraphQL?

GraphQL is a query language developed internally by Facebook in 2012 until its publication in 2015. It offers an alternative to the REST API. It proposes to the client to formulate the data structure in the query, while the same structure is returned by the server. Strongly typed, this language avoids the problems of insufficient data return (supernumerary) or supernumerary (supernumerary). Pairing with firebase allows to fill in the gaps of this one and provide a powerful backend.

### Why that stack 
GraphQL shines where Firebase falls short. Powerful data modeling, flexible and efficient queries and the open specification are all essential parts of GraphQL that are lacking with Firebase. Firebase is limited in his data modeling. Basically, all data is structured as a single, JSON that states the same data multiple times. What seems convenient at first results in unmanageable client code whenever you need to update data, as you have to keep track of all the references to the same data manually.
The data structure used in GraphQL on the other hand is very intuitive and familiar to think about, as it is modelled as a graph. Using the IDL syntax we can easily describe our data model, called the GraphQL schema. The flexible query capabilities of GraphQL is one its main benefits. Queries are hierarchical, that means you can specify data requirements that mirror the graph structure.

### Setup
 1- [Download and Install the latest LTS version of nodeJS](https://nodejs.org/en/)
 
 2- Choose you prefered IDE. I recommend[Visual Studio Code](httpswww.jetbrains.comstudent) or [Webstorm](https://www.jetbrains.com/webstorm/)

 3- Clone this repo on your pc

 4- Open a terminal and execute : `npm install`

 5- Run the app with `npm run server`
 
 6- Enjoy 😊!
 
### Setup Firebase (Optional)
 1- Create a [Firebase](https://firebase.google.com/) account and follow the get started guide.

 2- create a `.env` file at the root of your project and fill up these value with your firebase information:
  FIRESTORE_ADMIN_TYPE =
  
  FIRESTORE_ADMIN_PROJECT_ID = 
  
  FIRESTORE_ADMIN_PRIVATE_KEY_ID = 
  
  FIRESTORE_ADMIN_PRIVATE_KEY = 
  
  FIRESTORE_ADMIN_CLIENT_EMAIL =
  
  FIRESTORE_ADMIN_CLIENT_ID = 
  
  FIRESTORE_ADMIN_AUTH_URI = 
  
  FIRESTORE_ADMIN_TOKEN_URI =
  
  FIRESTORE_ADMIN_AUTH_PROVIDER_x509_CERT_URL =
  
  FIRESTORE_ADMIN_CLIENT_x509_CERT_URL = 
  
  API_KEY = 
  
  AUTH_DOMAIN = 
  
  DATABASE_URL = 
  
  PROJECT_ID = 
  
  STORAGE_BUCKET = 
  
  MESSAGING_SENDER_ID = 
  
 3- Create your own GraphQL query, mutation and subscription :)
 
## Info 

### Development language, framework and technologie
- JavaScript 
- TypeScript
- Node JS
- Express JS
- GraphQL
- Firebase

### Librarie

- [Express JS](https://expressjs.com/fr/)
- [Node JS](https://nodejs.org/en/)
- [GrapQL](https://www.apollographql.com/docs/apollo-server/)
- [Firebaes](https://firebase.google.com/docs/web/setup)

### More 
- You can use [apollo engine](https://engine.apollographql.com/login) to keep metrics and debug your query. Add your APPOLO_ENGINE_KEY in the .env file.

### Google Drive
- None

### Notice
Later this server will be able to use other database SQL or NoSQL

### Usefull VS code plugins
- Color highlight
- Document this
- EsLint
- hightlight-matching-tag
- jsx
- npm
- npm intellisense
- React redux Es6 snippet
- React-Native/React/ Redux snippets for es6/es7
- React/Redux/ React-router snippets
- Reactjs snippets
- Semistandard Format by homerjam
- vscode-flow-ide
- DotENV
- GraphQL
- Jest
