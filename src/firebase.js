import * as firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCqS2elqatRlKBURZACSpwCaR5nCv-dbu0",
  authDomain: "help-queue-firebase-bbfdb.firebaseapp.com",
  databaseURL: "https://help-queue-firebase.firebaseio.com",
  projectId: "help-queue-firebase-bbfdb",
  storageBucket: "help-queue-firebase-bbfdb.appspot.com",
  messagingSenderId: "667028728081",
  appId: "1:667028728081:web:746f755ccdaa01465144b0"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
