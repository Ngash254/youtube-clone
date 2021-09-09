import firebase from "firebase/compat/app";  //add the "/compat" due to version 9.0 upgrade;
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAM5of4YDn9xBg5DsQIBuESRyo4O19BGvw",
    authDomain: "yt-clone-1001.firebaseapp.com",
    projectId: "yt-clone-1001",
    storageBucket: "yt-clone-1001.appspot.com",
    messagingSenderId: "990076614837",
    appId: "1:990076614837:web:b854afe19b5e54d62166fc",
    measurementId: "G-HT63L3K0M0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();