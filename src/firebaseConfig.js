import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBJqn5KEB1_EtqYRkouFABIcDta41e96xI",
  authDomain: "skillassessment-7c1ce.firebaseapp.com",
  databaseURL: "https://skillassessment-7c1ce-default-rtdb.firebaseio.com/",
  projectId: "skillassessment-7c1ce",
  storageBucket: "skillassessment-7c1ce.appspot.com",
  messagingSenderId: "225726682899",
  appId: "1:225726682899:web:0c1a763ed9e01cc1746ce6"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export default database;

