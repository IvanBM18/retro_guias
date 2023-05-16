// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "retro-wiki.firebaseapp.com",
  projectId: "retro-wiki",
  storageBucket: "retro-wiki.appspot.com",  
  databaseURL: "https://retro-wiki-default-rtdb.firebaseio.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};


