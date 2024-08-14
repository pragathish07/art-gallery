
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/* const firebaseConfig = {
  apiKey: "AIzaSyDhx3Pk40Nq-vEZMDAlOl_O8j43jjfDMPI",
  authDomain: "art-gallery-f9745.firebaseapp.com",
  projectId: "art-gallery-f9745",
  storageBucket: "art-gallery-f9745.appspot.com",
  messagingSenderId: "296371447702",
  appId: "1:296371447702:web:21d3b9cf20c22fa2381fb7"
}; */


const firebaseConfig = {
  apiKey: "AIzaSyDhx3Pk40Nq-vEZMDAlOl_O8j43jjfDMPI",
  authDomain: "art-gallery-f9745.firebaseapp.com",
  projectId: "art-gallery-f9745",
  storageBucket: "art-gallery-f9745.appspot.com",
  messagingSenderId: "296371447702",
  appId: "1:296371447702:web:21d3b9cf20c22fa2381fb7"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth ,db , storage};