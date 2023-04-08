import {User, getAuth, onAuthStateChanged} from "firebase/auth";
import fireBaseApp from "@/services/firebase/firebaseApp";
// console.log(app);
const auth = getAuth(fireBaseApp);


export default auth;