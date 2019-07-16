import * as firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC98GgrN34v5paDdWfexQSA_v2qSfU0yRo",
    authDomain: "kto-landing.firebaseapp.com",
    databaseURL: "https://kto-landing.firebaseio.com",
    projectId: "kto-landing",
    storageBucket: "kto-landing.appspot.com",
    messagingSenderId: "343465466923",
    appId: "1:343465466923:web:2b8abddcea92bd85"
  })
}

export default firebase