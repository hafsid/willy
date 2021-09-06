import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCYhAxoxV7yTGghHi2cNq8cxHKwqp6Nfi0",
  authDomain: "wily-e3474.firebaseapp.com",
  projectId: "wily-e3474",
  storageBucket: "wily-e3474.appspot.com",
  messagingSenderId: "371518184411",
  appId: "1:371518184411:web:b257c523a8f282a8aaa5fe"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export default firebase.firestore;

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase.firestore();
