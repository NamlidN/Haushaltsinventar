import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_B,
  projectId: process.env.REACT_APP_C,
  storageBucket:process.env.REACT_APP_D,
  messagingSenderId: process.env.REACT_APP_E,
  appId:process.env.REACT_APP_F
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)