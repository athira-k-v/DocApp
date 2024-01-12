import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Your Firebase Data
  // apiKey: "AIzaSyB7VZMMWtOF09H5tda97uGjh-mEzJRmdFE",
  // authDomain: "docsapp-e31bb.firebaseapp.com",
  // projectId: "docsapp-e31bb",
  // storageBucket: "docsapp-e31bb.appspot.com",
  // messagingSenderId: "807606134496",
  // appId: "1:807606134496:web:deb5793eaad8474f121285",
  // measurementId: "G-6W1NTXNG7B"


  apiKey: "AIzaSyAtU1uHJwdbrMhGdRHn5V7YrGajYKX2oJU",
  authDomain: "doc-app-cb512.firebaseapp.com",
  projectId: "doc-app-cb512",
  storageBucket: "doc-app-cb512.appspot.com",
  messagingSenderId: "951079222142",
  appId: "1:951079222142:web:afa4ec1c9b5198912fd12f",
  measurementId: "G-EBKYVBYB01"


  
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)