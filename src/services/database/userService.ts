import { User } from "../../../models/user";
import { collection, addDoc, FirestoreError, getDocs, doc, setDoc } from "firebase/firestore";
import  db from "./config/dbProvider";

class UserService{
    static userName = '';

    static async registerUserName(user : User){
      const userRef = doc(db,'users',user.id);
      setDoc(userRef,{name:user.name,id:user.id},{merge:true})
        .then(() =>{
          console.log(`New User Register with name: ${user.name}`)
        })
        .catch((e : FirestoreError) =>{
          console.error(`[ERROR]: en registro de usuario. ${e.message}`)
        });
      // await addDoc(collection(db,`users/${user.name}`),{name:user.name,id:user.id})
      //   .then(() =>{
      //     console.log("User Document Writen");
      //   })
      //   .catch((e : FirestoreError) =>{
      //     console.error(`[ERROR] adding document, more info: ${e}`);
      //   })
    }

    static async getUserName(id : string){
      const docList = await getDocs(collection(db,"users"));
      console.log(docList);
      docList.forEach((doc) =>{
        console.log(doc.data());
        if(doc.data().id == id){
          this.userName = doc.data().id;
        }
      })
    }

}

export default UserService;
