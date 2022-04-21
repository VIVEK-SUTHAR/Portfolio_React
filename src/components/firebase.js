import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
   
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
export default db;