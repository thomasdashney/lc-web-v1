import * as firebase from 'firebase/app'
import 'firebase/database'
import { firebase as firebaseConfig } from 'config'

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()
