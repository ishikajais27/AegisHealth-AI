// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyAgu1tJYp7a8Ooe3Dnfde8uEIUrYVLFzZs',
//   authDomain: 'healthblue-1c347.firebaseapp.com',
//   projectId: 'healthblue-1c347',
//   storageBucket: 'healthblue-1c347.firebasestorage.app',
//   messagingSenderId: '377379722825',
//   appId: '1:377379722825:web:c30f002b74dd98c32fd198',
//   measurementId: 'G-9XT3QT0N8Z',
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
// firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAgu1tJYp7a8Ooe3Dnfde8uEIUrYVLFzZs',
  authDomain: 'healthblue-1c347.firebaseapp.com',
  projectId: 'healthblue-1c347',
  storageBucket: 'healthblue-1c347.firebasestorage.app',
  messagingSenderId: '377379722825',
  appId: '1:377379722825:web:c30f002b74dd98c32fd198',
  measurementId: 'G-9XT3QT0N8Z',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
