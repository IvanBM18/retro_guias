import { firebaseConfig } from "../../fbase/firebaseConfig";
import { Firestore, getFirestore } from "firebase/firestore";
import fireBaseApp from "@/services/fbase/firebaseApp";

const db : Firestore = getFirestore(fireBaseApp);

export default db;