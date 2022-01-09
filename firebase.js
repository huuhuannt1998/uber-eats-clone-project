// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUzIKSMA0buSZCiei5v4-3Kknk64vxw1E",
    authDomain: "uber-eats-clone-b8397.firebaseapp.com",
    projectId: "uber-eats-clone-b8397",
    storageBucket: "uber-eats-clone-b8397.appspot.com",
    messagingSenderId: "601614081080",
    appId: "1:601614081080:web:253aad3c7de3ec753f9acd"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;