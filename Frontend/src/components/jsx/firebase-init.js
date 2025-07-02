import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";  // Added import for Firebase Storage

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzfp4ZE6PPqF37t8jHMjo2E7F7CLHp4GY",
  authDomain: "xprime-3973c.firebaseapp.com",
  projectId: "xprime-3973c",
  storageBucket: "xprime-3973c.firebasestorage.app",
  messagingSenderId: "237348420750",
  appId: "1:237348420750:web:ea697bfde946b658c41ddf",
  measurementId: "G-8V5EM4XPCR",
  databaseURL: "https://xprime-3973c-default-rtdb.firebaseio.com/"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Realtime Database and get a reference to the service
const realtimeDb = getDatabase(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

const analytics = getAnalytics(app);

export { app, auth, db, realtimeDb, analytics, storage };
