import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAhGIQ7WVhbAO1ob5SmcsOTtMR1vzj9vqg",
  authDomain: "house-marketplace-app-16635.firebaseapp.com",
  projectId: "house-marketplace-app-16635",
  storageBucket: "house-marketplace-app-16635.appspot.com",
  messagingSenderId: "208398914415",
  appId: "1:208398914415:web:1bb941fc94982b195fce9a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();