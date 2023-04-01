import {getAuth} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebaseConfig";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig);
// console.log(app);
const auth = getAuth(app);

export default auth;