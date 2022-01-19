import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'process.env.REACT_APP_API_KEY',
  authDomain: "recipe-app-653a9.firebaseapp.com",
  projectId: "recipe-app-653a9",
  storageBucket: "recipe-app-653a9.appspot.com",
  messagingSenderId: "855340748235",
  appId: "1:855340748235:web:ebfc64b3396af0d8303a4e",
  measurementId: "G-SXDE8005W0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
