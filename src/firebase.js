import * as firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyC2XrzYUrT6Ln_nxYuPaxQLKmmSwaQHR3w",
    authDomain: "diary-e4887.firebaseapp.com",
    databaseURL: "https://diary-e4887.firebaseio.com",
    projectId: "diary-e4887",
    storageBucket: "diary-e4887.appspot.com",
    messagingSenderId: "614563252443"
  };
  firebase.initializeApp(config);
  
  export const database = firebase.database().ref('/notes');
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();