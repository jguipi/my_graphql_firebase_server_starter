import 'dotenv/config';
import * as firebaseAdmin from 'firebase-admin';
import firebase from 'firebase';

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
    {
      type: process.env.FIRESTORE_ADMIN_TYPE,
      project_id: process.env.FIRESTORE_ADMIN_PROJECT_ID,
      private_key_id: process.env.FIRESTORE_ADMIN_PRIVATE_KEY_ID,
      private_key: process.env.FIRESTORE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIRESTORE_ADMIN_CLIENT_EMAIL,
      client_id: process.env.FIRESTORE_ADMIN_CLIENT_ID,
      auth_uri: process.env.FIRESTORE_ADMIN_AUTH_URI,
      token_uri: process.env.FIRESTORE_ADMIN_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FIRESTORE_ADMIN_AUTH_PROVIDER_x509_CERT_URL,
      client_x509_cert_url: process.env.FIRESTORE_ADMIN_CLIENT_x509_CERT_URL
    }
  ),
  databaseURL: process.env.DATABASE_URL
});

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
});

const settings = {timestampsInSnapshots: true};

try {
  firebaseAdmin.firestore().settings(settings);
} catch (error) {}

export { firebaseAdmin, firebase };
