// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0QFks9Ait1qlIEIUyZkSVa2MFgNbuvPQ",
  authDomain: "numeros-bc5a2.firebaseapp.com",
  databaseURL: "https://numeros-bc5a2-default-rtdb.firebaseio.com",
  projectId: "numeros-bc5a2",
  storageBucket: "numeros-bc5a2.firebasestorage.app",
  messagingSenderId: "1023307434018",
  appId: "1:1023307434018:web:26b5cbc03a527c2f11227b",
  measurementId: "G-EEL6YQJ3WL"
};

// Initialize Firebase (ejecutará cuando Firebase esté listo)
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  window.database = firebase.database();
  window.numbersRef = database.ref('whatsappNumber');
}
