import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPXsrkcZ0aJ9lxNRUPFmY-_OcAVUC1kk0",
    authDomain: "clone-ang.firebaseapp.com",
    projectId: "clone-ang",
    storageBucket: "clone-ang.appspot.com",
    messagingSenderId: "367590296284",
    appId: "1:367590296284:web:8864cc523ec8f4a2704219",
    measurementId: "G-92QWM29FDH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, auth, provider };