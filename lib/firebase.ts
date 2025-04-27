import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfjizAo8P5M8e75LMNRE7Z90NtKfT-7C4",
  authDomain: "ai-safety-incident-dashboard.firebaseapp.com",
  projectId: "ai-safety-incident-dashboard",
  storageBucket: "ai-safety-incident-dashboard.firebasestorage.app",
  messagingSenderId: "1052890324997",
  appId: "1:1052890324997:web:ba2f941c20724f3a39bc6c",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
