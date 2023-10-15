
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg1eLLEo0wlFuQkus5nHnSC9tIO7lVfbc",
  authDomain: "canifa-shopping.firebaseapp.com",
  projectId: "canifa-shopping",
  storageBucket: "canifa-shopping.appspot.com",
  messagingSenderId: "922326557393",
  appId: "1:922326557393:web:3a46a2249ed276cc461bf0"
};

 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const faceProvider = new FacebookAuthProvider()
