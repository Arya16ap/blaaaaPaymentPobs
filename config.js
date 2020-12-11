import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDAHMW1j7T6ioNygnBL0jtu1VwwNAW7K58",
    authDomain: "apppiedad.firebaseapp.com",
    databaseURL: "https://apppiedad.firebaseio.com",
    projectId: "apppiedad",
    storageBucket: "apppiedad.appspot.com",
    messagingSenderId: "393429290976",
    appId: "1:393429290976:web:fa0e37688c4dae90bfa585",
    measurementId: "G-L3DWPCCXCJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();