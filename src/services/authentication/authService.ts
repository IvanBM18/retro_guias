import {  AuthError, User, UserCredential, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import UserCredentials from "../../models/user";
import fireBaseApp from "../firebase/firebaseApp";
import { send } from "process";

class AuthService{
  static user : User;
  static auth = getAuth(fireBaseApp);

  static async signup(newUser : UserCredentials, name : string): Promise<User>{
    try {
      const newUserCredentials : UserCredential = await createUserWithEmailAndPassword(this.auth,newUser.email,newUser.password);
      
      await updateProfile(newUserCredentials.user, {displayName:name})

      await sendEmailVerification(newUserCredentials.user);
      
      return newUserCredentials.user;
    }catch (error : any){
      console.log(`[ERROR] while trying to create a new user: ${error.message}`)
      throw error;
    }
    // await createUserWithEmailAndPassword(this.auth,newUser.email,newUser.password)
    //   .then((userCredentials : UserCredential) =>{
    //     updateProfile(this.auth.currentUser!, {displayName:name})
    //     this.user = userCredentials.user;
    //     return this.user;
    //   })
    //   .catch((error : AuthError) => {
    //     console.error(`[ERROR CODE ${error.code}] : ${error.message}`);
    //   })
    //   return this.user;
      
  }

  static async login(credentials : UserCredentials) : Promise<User>{
    await signInWithEmailAndPassword(this.auth,credentials.email,credentials.password)
      .then((userCredentials : UserCredential) =>{
        this.user = userCredentials.user;
        return this.user; 
      })
      .catch((error : AuthError) => {
        console.error(`[ERROR CODE ${error.code}] : ${error.message}`);
      })
      return this.user;
  }

  static async logout(){
    await signOut(this.auth).then(()=>{
      console.log('Session clossed!');
    })
    .catch((e : AuthError) =>{
      console.error(`[ERROR] while trying to log out: ${e.message}`)
    })
  }

  static async isVerified(){
    console.log(this.auth.currentUser?.emailVerified);
    return this.auth.currentUser?.emailVerified;
  }

  static async getCurrentUser(){
    if(this.auth.currentUser){
      return this.auth.currentUser;
    }
    return null;
  }

}

export default AuthService;