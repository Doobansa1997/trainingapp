import { inject, Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Auth } from '@angular/fire/auth';
// Import the functions you need from the SDKs you need

import { collection, collectionData, getDocs, getFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  firebaseConfig = {
    apiKey: "AIzaSyCUM_1hoXnXXwe4OjSGc20wkn8oRR9KMZ8",
    authDomain: "trainapp-82662.firebaseapp.com",  
    projectId: "trainapp-82662",  
    storageBucket: "trainapp-82662.appspot.com",  
    messagingSenderId: "269841665207",  
    appId: "1:269841665207:web:16833c6e126042db3f1132",  
    measurementId: "G-4FENN78V7C"  
  };
    
  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);  
  db = getFirestore(this.app)
  constructor(private auth: Auth,) { }

  async testFirebase(){
    const trainCollection = collection(this.db, 'training');
    const itemsSnapshot = await getDocs(trainCollection);
    const items = itemsSnapshot.docs.map(doc => doc.data())
    console.log(items)
  }
}
