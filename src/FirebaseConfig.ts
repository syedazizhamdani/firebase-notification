
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYhOj0ltGWlLqTpVlFAdsaUzOoZNmVf90",
    authDomain: "notification-system-e86b2.firebaseapp.com",
    projectId: "notification-system-e86b2",
    storageBucket: "notification-system-e86b2.appspot.com",
    messagingSenderId: "18091072328",
    appId: "1:18091072328:web:e0d077e38f0a16fbfb717d"
  };


const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);
export {firestore}
