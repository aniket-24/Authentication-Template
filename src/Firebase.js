// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBZIz0CUFNGN3WKlN66wRa3pfH6zYGGCmI",
  authDomain: "focus-app-cce6b.firebaseapp.com",
  projectId: "focus-app-cce6b",
  storageBucket: "focus-app-cce6b.appspot.com",
  messagingSenderId: "817044218899",
  appId: "1:817044218899:web:de4af9b06bd7fd52454be6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
