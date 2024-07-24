import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEVuxDzhEykuz-5KDNCIoqeoRbcqDOjK0",
  authDomain: "devlinks-eed85.firebaseapp.com",
  projectId: "devlinks-eed85",
  storageBucket: "devlinks-eed85.appspot.com",
  messagingSenderId: "388488154386",
  appId: "1:388488154386:web:f9cb13942806bccd3db7cb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
