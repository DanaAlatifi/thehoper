import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAF8cWkbpNJn0gOXteq_mDKXqlX0xt1W0",
    authDomain: "hoper-58aae.firebaseapp.com",
    databaseURL: "https://hoper-58aae-default-rtdb.firebaseio.com",
    projectId: "hoper-58aae",
    storageBucket: "hoper-58aae.firebasestorage.app",
    messagingSenderId: "727848587618",
    appId: "1:727848587618:web:13002293f58ac84b6c1c3b",
    measurementId: "G-PR3P8D8WQ9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };