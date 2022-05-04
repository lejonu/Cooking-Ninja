import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCtpiwO0frbgbiRIc4zSgcCE3E_QvnVMXc",
  authDomain: "cooking-ninjs-site-f0335.firebaseapp.com",
  projectId: "cooking-ninjs-site-f0335",
  storageBucket: "cooking-ninjs-site-f0335.appspot.com",
  messagingSenderId: "324809830637",
  appId: "1:324809830637:web:317ff320043fb4f9f09ce4"
}

// init firebase

firebase.initializeApp(firebaseConfig)

// ini services
const projectFirestore = firebase.firestore()

export { projectFirestore }
