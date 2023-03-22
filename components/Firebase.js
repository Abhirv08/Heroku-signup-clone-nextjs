import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCRFQe98rp3VkTQsSwLmfIsJAgppH6if-Y",
  authDomain: "authentication-c3f62.firebaseapp.com",
  projectId: "authentication-c3f62",
  storageBucket: "authentication-c3f62.appspot.com",
  messagingSenderId: "204691232698",
  appId: "1:204691232698:web:d8e9d56ffd1579cd02ef83",
  measurementId: "G-T0GYJKNMCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth, app}