// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuFDSZO-Z8ZV0Y2LE1eWUr4E6hk3yHoYA",
    authDomain: "photography-a5d3a.firebaseapp.com",
    projectId: "photography-a5d3a",
    storageBucket: "photography-a5d3a.appspot.com",
    messagingSenderId: "337754774908",
    appId: "1:337754774908:web:8de854ee7e2927328698f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;