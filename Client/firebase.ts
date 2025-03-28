import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAtbrlWujLGDcVXTYcnDjs868AIZzLF3LY",
    authDomain: "notion-clone-b294e.firebaseapp.com",
    projectId: "notion-clone-b294e",
    storageBucket: "notion-clone-b294e.firebasestorage.app",
    messagingSenderId: "511737250944",
    appId: "1:511737250944:web:6935e7ebb2193ef5159265"
  };

  const app = getApps().length === 0? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  export {db};