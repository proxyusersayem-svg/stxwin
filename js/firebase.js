// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7BK93f9qqUuvJBaJrF7jSyU2A7pjE744",
  authDomain: "stxwin-6dcc1.firebaseapp.com",
  databaseURL: "https://stxwin-6dcc1-default-rtdb.firebaseio.com",
  projectId: "stxwin-6dcc1",
  storageBucket: "stxwin-6dcc1.firebasestorage.app",
  messagingSenderId: "442985758225",
  appId: "1:442985758225:web:b21b31133ba1779e78fbb0",
  measurementId: "G-Y0HT09VDTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
