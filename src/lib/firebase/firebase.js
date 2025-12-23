import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export { firebaseConfig };

const app = initializeApp(firebaseConfig);

let analytics = null;
// Firebase Installations / Analytics require a valid `projectId`.
// If `projectId` is missing (e.g. env var not set), skip analytics to avoid the runtime error
// and provide a helpful console message to the developer.
if (firebaseConfig.projectId) {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    console.warn("Firebase analytics initialization skipped:", e);
  }
} else {
  console.warn(
    "Missing Firebase `projectId`. Set VITE_FIREBASE_PROJECT_ID in your .env (or Vite env) to enable Analytics and Installations."
  );
}

export { analytics };
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);