  // Firebase configuration
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  

  var firebaseConfig = {
    /*apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_STORAGE_BUCKET,
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID*/ 
    apiKey: "AIzaSyABbKYmHoXH02gHYYs7MCu0_pJdu2oVL1Q",
    authDomain: "edeng-a3533.firebaseapp.com",
    databaseURL: "https://edeng-a3533.firebaseio.com",
    projectId: "edeng-a3533",
    storageBucket: "edeng-a3533.appspot.com",
    messagingSenderId: "404766685794",
    appId: "1:404766685794:web:fb305f685c14a64a"
  };

  const rrfConfig = {
      userProfile: 'users',
      useFirestoreForProfile: 'true'
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  
  export default firebase;
  export { rrfConfig  }
  
