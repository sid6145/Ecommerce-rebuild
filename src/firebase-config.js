import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBdBrDsNbQ3oG3iVOwYlcLHKvT2WAs1NOQ",
    authDomain: "ecommerce-683f9.firebaseapp.com",
    projectId: "ecommerce-683f9",
    storageBucket: "ecommerce-683f9.appspot.com",
    messagingSenderId: "118188708145",
    appId: "1:118188708145:web:eae8706044aead678da010"
  };

  firebase.initializeApp(firebaseConfig)

  export const db = firebase.firestore()
  export const storage = firebase.storage()
  export const auth = firebase.auth()