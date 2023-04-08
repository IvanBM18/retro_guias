import { firebaseConfig } from "../../firebase/firebaseConfig";
import { Firestore, getFirestore } from "firebase/firestore";
import fireBaseApp from "@/services/firebase/firebaseApp";

const db : Firestore = getFirestore(fireBaseApp);

export default db;