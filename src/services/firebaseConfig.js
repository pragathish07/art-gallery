import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, //"AIzaSyB0HgyfMsxpZBkecriw-aDCKMqLriweWh0",
  authDomain: process.env.FIREBASE_AUTHDOMAIN, //"auth-dev-3a10e.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID,//"auth-dev-3a10e",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,//"auth-dev-3a10e.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGE_ID,//"1005205820678",
  appId: process.env.FIREBASE_APP_ID,//"1:1005205820678:web:8a382c263496998fc6fa87"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth ,db , storage};