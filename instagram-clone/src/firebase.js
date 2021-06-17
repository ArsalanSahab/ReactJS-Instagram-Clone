  import firebase from "firebase"

  const firebaseApp = firebase.initialiseApp({


    apiKey: "AIzaSyBvsnzhDTZ4fVOIDvWKXYSvvsIpgfnBt3E",
    authDomain: "instagram-clone-react-8954d.firebaseapp.com",
    projectId: "instagram-clone-react-8954d",
    storageBucket: "instagram-clone-react-8954d.appspot.com",
    messagingSenderId: "936405101117",
    appId: "1:936405101117:web:0c769cd2dc3a6adce2d854"


  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };