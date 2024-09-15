import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(), 
    provideFirebaseApp(() => initializeApp({"projectId":"trainapp-82662","appId":"1:269841665207:web:16833c6e126042db3f1132","storageBucket":"trainapp-82662.appspot.com","apiKey":"AIzaSyCUM_1hoXnXXwe4OjSGc20wkn8oRR9KMZ8","authDomain":"trainapp-82662.firebaseapp.com","messagingSenderId":"269841665207","measurementId":"G-4FENN78V7C"})), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideStorage(() => getStorage())],
};
