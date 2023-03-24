// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAF_u9Fu-ki4c7WBoonfH6d33RGzkm4eI8',

  authDomain: 'management-system-2ae77.firebaseapp.com',

  projectId: 'management-system-2ae77',

  storageBucket: 'management-system-2ae77.appspot.com',

  messagingSenderId: '685377135851',

  appId: '1:685377135851:web:0c9c3b4789f5cae6838aae',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// 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
