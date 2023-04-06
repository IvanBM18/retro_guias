import {getAuth} from "firebase/auth";
import fireBaseApp from "@/services/fbase/firebaseApp";
// console.log(app);
const auth = getAuth(fireBaseApp);

export default auth;