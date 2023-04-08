import {  AuthError, User, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import UserCredentials from "../../../models/typescriptModels/user";
import auth from "./config/authentication";
import UserService from "../database/userService";

class AuthService{
  static user : User;
  static isUserLogedIn : boolean = false;

  static async createAccount(newUser : UserCredentials, name : string){
    // console.log(newUser);
    await createUserWithEmailAndPassword(auth,newUser.email,newUser.password)
      .then( (userCredentials : UserCredential) =>{
        updateProfile(auth.currentUser!, {displayName:name})
        this.user = userCredentials.user;
        this.isUserLogedIn = true;
        UserService.registerUserName({id: this.user.uid, name:name,...newUser})
      })
      .catch((error : AuthError) => {
        console.error(`[ERROR CODE ${error.code}] : ${error.message}`);
      })
      
  }

  static async login(credentials : UserCredentials){
    signInWithEmailAndPassword(auth,credentials.email,credentials.password)
      .then((userCredentials : UserCredential) =>{
        this.user = userCredentials.user;
        console.log("INICIO DE SEION SATISFACTORIO");
        
      })
      .catch((error : AuthError) => {
        console.error(`[ERROR CODE ${error.code}] : ${error.message}`);
      })

  }
}

export default AuthService;