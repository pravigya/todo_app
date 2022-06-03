import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZUNokMyDD9GApfRoi7cOEY6cywu09_fc",
    authDomain: "todoapp-1ad95.firebaseapp.com",
    projectId: "todoapp-1ad95",
    storageBucket: "todoapp-1ad95.appspot.com",
    messagingSenderId: "129694728866",
    appId: "1:129694728866:web:b38258a53d101bd318cdfb"
  }; 

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();

  export {db};