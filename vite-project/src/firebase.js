import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "expense-tracker-e91b8.firebaseapp.com",
  projectId: "expense-tracker-e91b8",
  storageBucket: "expense-tracker-e91b8.appspot.com",
  messagingSenderId: "840875982038",
  appId: "1:840875982038:web:08b8b82928dfc0c7505d77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);