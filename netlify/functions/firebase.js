const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {apiKey: "AIzaSyCogcidkk_Vjaa8gS7flxV-VVECoII_KJE",
authDomain: "kiei-451-11c20.firebaseapp.com",
projectId: "kiei-451-11c20",
storageBucket: "kiei-451-11c20.appspot.com",
messagingSenderId: "260034782064",
appId: "1:260034782064:web:5326a290f4f107ccd665b5"} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase