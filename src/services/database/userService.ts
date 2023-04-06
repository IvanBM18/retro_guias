import { User } from "../../../models/typescriptModels/user";
import { collection, addDoc, FirestoreError, doc } from "firebase/firestore";
import db from "./config/dbProvider";

class UserService{

    static async registerUserName(user : User){
      await addDoc(collection(db,"users"),{name:user.name,id:user.id})
        .then(() =>{
          console.log("User Document Writen");
        })
        .catch((e : FirestoreError) =>{
          console.error(`[ERROR] adding document, more info: ${e}`);
        })
    }

    // async getUserName(user : User){
    //   const docRef = doc(db,"users",);
    // }

}

export default UserService;
