import {  AuthError, User, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import UserCredentials from "../../../models/typescriptModels/user";
import auth from "./config/authentication";
import UserService from "../database/userService";

class AuthService{
  static user : User;
  static isUserLogedIn : boolean = false;
  static auth = auth;

  static async createAccount(newUser : UserCredentials, name : string){
    // console.log(newUser);
    createUserWithEmailAndPassword(auth,newUser.email,newUser.password)
      .then( (userCredentials : UserCredential) =>{
        updateProfile(auth.currentUser!, {displayName:name})
        this.user = userCredentials.user;
        this.isUserLogedIn = true;
        // UserService.registerUserName({id: this.user.uid, name:name,...newUser})
      })
      .catch((error : AuthError) => {
        console.error(`[ERROR CODE ${error.code}] : ${error.message}`);
      })
      
      this.login(newUser);
      
  }

  static async login(credentials : UserCredentials){
    await signInWithEmailAndPassword(auth,credentials.email,credentials.password)
      .then((userCredentials : UserCredential) =>{
        this.user = userCredentials.user;        
      })
      .catch((error : AuthError) => {
        console.error(`[ERROR CODE ${error.code}] : ${error.message}`);
      })
      const token = await auth.currentUser?.getIdToken()
      if(token){
        console.log('Login Suffesful!');
        localStorage.setItem('authToken', token);
      }
  }

  static async logOut(){
    await signOut(auth).then(()=>{
      console.log('Session clossed!');
      localStorage.removeItem('authToken');
    })
    .catch((e : AuthError) =>{
      console.error(`[ERROR] while trying to log out: ${e.message}`)
    })
  }

}

export default AuthService;