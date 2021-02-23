import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDBjsqQqNzcOdmSosjsuz5tRjyMDXOjuGo",
    authDomain: "marioplan-19df0.firebaseapp.com",
    projectId: "marioplan-19df0",
    storageBucket: "marioplan-19df0.appspot.com",
    messagingSenderId: "498296891960",
    appId: "1:498296891960:web:a65b50cc98b3eecca754cd",
    measurementId: "G-QH08PV9F8G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;