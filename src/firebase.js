import firebase from 'react-native-firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBlpK1tJ8w89ivT6W_LIu-3V_uxIaoTywo',
  authDomain: 'oyelabs-2f950.firebaseapp.com',
  projectId: 'oyelabs-2f950',
  storageBucket: 'oyelabs-2f950.appspot.com',
  messagingSenderId: '769104377957',
  appId: '1:769104377957:web:465e0b5ea29b654bb0ee8c',
  measurementId: 'G-RT59W232C7',
};

const d = firebase.initializeApp(firebaseConfig);

const db = d.firestore();

// const timestamp = d.functions
export {db};
