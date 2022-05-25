import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore} from '@firebase/firestore'
import {getStorage} from '@firebase/storage'
import {getDatabase} from '@firebase/database'




const firebaseConfig = {
    apiKey: "AIzaSyDPmjDcRL7WEmYYkP6SghrXECj_GNXw0pA",
    authDomain: "portfolio-website-d0421.firebaseapp.com",
    projectId: "portfolio-website-d0421",
    storageBucket: "portfolio-website-d0421.appspot.com",
    messagingSenderId: "771712020158",
    appId: "1:771712020158:web:96f44aa859786f3aec78ef",
    measurementId: "G-YLGPKMY3EZ"
};







const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const database = getDatabase(app);



export { app , db,database, storage};