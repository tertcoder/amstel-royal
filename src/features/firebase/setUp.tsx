// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

// Define the Firebase configuration interface
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
  // Optional property with a default value
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyC_nuAO6q01WWL-ZY8bix1V3O6LL0oRPyg",
  authDomain: "smsverify-ec633.firebaseapp.com",
  projectId: "smsverify-ec633",
  storageBucket: "smsverify-ec633.appspot.com",
  messagingSenderId: "378710340101",
  appId: "1:378710340101:web:c748aead8f04600cbce26c",
  measurementId: "G-R2T5MHGMJG"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app); // Explicitly define the type of auth

export { auth };