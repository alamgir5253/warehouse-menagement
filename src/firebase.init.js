import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsTuB6u3L6liOcohY7sQB5FQaAamTw2y8",
  authDomain: "dream-auto-warehouse.firebaseapp.com",
  projectId: "dream-auto-warehouse",
  storageBucket: "dream-auto-warehouse.appspot.com",
  messagingSenderId: "852259772801",
  appId: "1:852259772801:web:1445fa9da568bccb713080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;