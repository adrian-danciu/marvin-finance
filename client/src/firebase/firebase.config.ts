import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkQQg73D-xDaB5wDleUhRGWdDYmogt_cw",
  authDomain: "marv-fe229.firebaseapp.com",
  projectId: "marv-fe229",
  storageBucket: "marv-fe229.appspot.com",
  messagingSenderId: "404717602234",
  appId: "1:404717602234:web:8d6610eb7bc6b8fb09c983",
  measurementId: "G-VHE27J5L3K",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
