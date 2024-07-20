import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0HgyfMsxpZBkecriw-aDCKMqLriweWh0",
  authDomain: "auth-dev-3a10e.firebaseapp.com",
  projectId: "auth-dev-3a10e",
  storageBucket: "auth-dev-3a10e.appspot.com",
  messagingSenderId: "1005205820678",
  appId: "1:1005205820678:web:8a382c263496998fc6fa87"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth ,db , storage};