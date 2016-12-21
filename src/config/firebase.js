import firebase from 'firebase';

// firebase config object
const config = {
  apiKey: "AIzaSyARM7oCfJRZUw4hE24---5-izkUEYrHhKw",
  authDomain: "github-notes-80e5a.firebaseapp.com",
  databaseURL: "https://github-notes-80e5a.firebaseio.com",
  storageBucket: "github-notes-80e5a.appspot.com",
  messagingSenderId: "283433822236"
};

const firebaseInitApp = () => {
  firebase.initializeApp(config);
}

// function to initialize firebase
export { firebaseInitApp };
