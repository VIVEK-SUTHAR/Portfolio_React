import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCfPp0MsmmjM3nkOa-2qXbHdfVL3omlznc",
    authDomain: "portfolio-64ce4.firebaseapp.com",
    projectId: "portfolio-64ce4",
    storageBucket: "portfolio-64ce4.appspot.com",
    messagingSenderId: "666576233122",
    appId: "1:666576233122:web:6dba71e32573b34984adfb"
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
export const auth=firebaseapp.auth();
export default db;