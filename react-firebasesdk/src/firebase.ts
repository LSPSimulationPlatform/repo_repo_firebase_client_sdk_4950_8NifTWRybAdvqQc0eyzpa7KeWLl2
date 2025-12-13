// Import functions from Firebase SDK
import { initializeApp } from 'firebase/app';          // Initializes Firebase app
import { getAuth, GoogleAuthProvider } from 'firebase/auth';  // Firebase Authentication
import { getFirestore } from 'firebase/firestore';    // Firestore database
import { getStorage } from 'firebase/storage';        // Firebase Storage
import type { Auth } from 'firebase/auth';            // Type for Auth
import type { Firestore } from 'firebase/firestore';  // Type for Firestore
import type { FirebaseStorage } from 'firebase/storage'; // Type for Storage

// Firebase configuration object
// Uses environment variables from Vite to keep sensitive info secure
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,                  // Your Firebase API key
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,          // Auth domain for Firebase Auth
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,            // Firebase project ID
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,    // Firebase storage bucket
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,  // Messaging sender ID
  appId: import.meta.env.VITE_FIREBASE_APP_ID                     // Firebase app ID
};

const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);
export default app;
