import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUeSW9pJgTmRLeD_VHhXeagRFhLGin1g8",
  authDomain: "medikated-app.firebaseapp.com",
  projectId: "medikated-app",
  storageBucket: "medikated-app.firebasestorage.app",
  messagingSenderId: "903362964270",
  appId: "1:903362964270:web:01e23fb30273536d0f28bf",
  measurementId: "G-YM69T5GL28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 