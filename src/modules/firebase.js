import firebase from 'firebase'
import { firebase as firebaseConfig } from 'config'

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()
