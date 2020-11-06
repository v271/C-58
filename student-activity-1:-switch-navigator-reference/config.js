import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAvX1h5psFMK-ZhWMG-qtAsq4_esUei2os",
  authDomain: "wireless-buzzer-app-50afc.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-50afc.firebaseio.com",
  projectId: "wireless-buzzer-app-50afc",
  storageBucket: "wireless-buzzer-app-50afc.appspot.com",
  messagingSenderId: "1027692667750",
  appId: "1:1027692667750:web:f369ef744bcc9ba8cf1ea7",
  measurementId: "G-E9HQ5V7HXP"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();