import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDU8EURvNf88oIn7kRCxjj1tQVTfmWl2nM',
  authDomain: 'evas-project.firebaseapp.com',
  databaseURL: 'https://evas-project.firebaseio.com',
  projectId: 'evas-project',
  storageBucket: 'evas-project.appspot.com',
  messagingSenderId: '325034522571',
  appId: '1:325034522571:web:19e5d4d8a8c91d7dcda84e',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const cardsRef = db.collection('users')
