import firebase from 'firebase/compat/app';
import database from 'firebase/compat/database'
import AsyncStorage from '@react-native-async-storage/async-storage';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC5Df_5SSARKwvJcDUL51NN0sfkQbTRO78",
    authDomain: "cropyieldtracker.firebaseapp.com",
    projectId: "cropyieldtracker",
    storageBucket: "cropyieldtracker.appspot.com",
    messagingSenderId: "1066515244221",
    appId: "1:1066515244221:web:d5333380c4d831319b83d4"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 
  //const key="feaven6966"
  //const sha=sha1(key)
  //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+sha)
  export default firebase.database().ref('cropyieldtracker');

  