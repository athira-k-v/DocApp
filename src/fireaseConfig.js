import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Your Firebase Data
  apiKey: "AIzaSyB7VZMMWtOF09H5tda97uGjh-mEzJRmdFE",
  authDomain: "docsapp-e31bb.firebaseapp.com",
  projectId: "docsapp-e31bb",
  storageBucket: "docsapp-e31bb.appspot.com",
  messagingSenderId: "807606134496",
  appId: "1:807606134496:web:deb5793eaad8474f121285",
  measurementId: "G-6W1NTXNG7B"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)