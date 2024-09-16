import { inject, Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from '@angular/fire/app';
import { Auth } from '@angular/fire/auth';
// Import the functions you need from the SDKs you need

import { addDoc, collection, collectionData, CollectionReference, DocumentData, DocumentReference, Firestore, getDocs, getFirestore } from '@angular/fire/firestore';
import { Training } from '../../models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
    
  // Initialize Firebase
  db!: Firestore;
  trainCollection!: CollectionReference<DocumentData, DocumentData>;
  constructor(private auth: Auth, private firebaseApp: FirebaseApp) { 
    console.log(firebaseApp);
    this.db = getFirestore(firebaseApp);
    this.trainCollection = collection(this.db, 'trainings')
  }

  async testFirebase(){
    const itemsSnapshot = await getDocs(this.trainCollection);
    const items = itemsSnapshot.docs.map(doc => doc.data())
    console.log(items)
  }

  async addTraining(training: Training){
    addDoc(this.trainCollection, training).then((documentReference: DocumentReference) => {
      console.log("New training added: id " + documentReference);
    })
  }
}