// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXtDHBXYeIkMSd0UsOxUaRIESQOiMkOCc",
    authDomain: "tea-fun.firebaseapp.com",
    projectId: "tea-fun",
    storageBucket: "tea-fun.appspot.com",
    messagingSenderId: "49422475179",
    appId: "1:49422475179:web:15166f01b6bf94fb183cee",
    measurementId: "G-WTT5D4C3YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app)

export {app,auth}