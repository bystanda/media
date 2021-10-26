"use strict";

const firebaseConfig = {
  apiKey: "AIzaSyB317_JCdlA0mn3S4BuVwYFfvIZHTJz8rk",
  authDomain: "socialer-42ac5.firebaseapp.com",
  projectId: "socialer-42ac5",
  storageBucket: "socialer-42ac5.appspot.com",
  messagingSenderId: "218520238115",
  appId: "1:218520238115:web:353a05e0e4962239821996"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

function write() {
  db.collection(collection).doc(docId).set(docObj)  // write document to db
}

db.collection(collection).doc(docID).get().then(docObj => {})  // read document
db.collection(collection).doc(docId).set(docObj)  // write document to db