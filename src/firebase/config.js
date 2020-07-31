import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBnoK2ytEgsYbwBeRbeYXQTnND4A3KV--w",
  authDomain: "photogallery-ac205.firebaseapp.com",
  databaseURL: "https://photogallery-ac205.firebaseio.com",
  projectId: "photogallery-ac205",
  storageBucket: "photogallery-ac205.appspot.com",
  messagingSenderId: "900553352067",
  appId: "1:900553352067:web:aace536df8854dc6c60cb6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export{projectStorage, projectFireStore, timeStamp};
