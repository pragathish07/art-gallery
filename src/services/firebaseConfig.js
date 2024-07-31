
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, //"AIzaSyB0HgyfMsxpZBkecriw-aDCKMqLriweWh0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN, //"auth-dev-3a10e.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,//"auth-dev-3a10e",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,//"auth-dev-3a10e.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_ID,//"1005205820678",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,//"1:1005205820678:web:8a382c263496998fc6fa87"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth ,db , storage};