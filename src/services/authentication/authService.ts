import {  AuthError, User, UserCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import UserCredentials from "../../../models/user";
import fireBaseApp from "../firebase/firebaseApp";

class AuthService{
  static user : User;
  static auth = getAuth(fireBaseApp);

  static async signup(newUser : UserCredentials, name : string): Promise<User>{
    // console.log(newUser);
    createUserWithEmailAndPassword(this.auth,newUser.email,newUser.password)
      .then((userCredentials : UserCredential) =>{
        updateProfile(this.auth.currentUser!, {displayName:name})
        return this.login(newUser);
        // UserService.registerUserName({id: this.user.uid, name:name,...newUser})
      })
      .catch((error : AuthError) => {
        console.error(`[ERROR CODE ${error.code}] : ${error.message}`);
      })
      return this.user;
      
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
      localStorage.removeItem('authToken');
    })
    .catch((e : AuthError) =>{
      console.error(`[ERROR] while trying to log out: ${e.message}`)
    })
  }

  static async getCurrentUser(){
    if(this.auth.currentUser){
      return this.auth.currentUser;
    }
    return null;
  }

}

export default AuthService;