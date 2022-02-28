import '../styles/globals.css'
import type { AppProps } from 'next/app'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6nfpzKVUmsAiGKHFNtDP5yT01oabOLBo",
  authDomain: "bikenow-2aea3.firebaseapp.com",
  projectId: "bikenow-2aea3",
  storageBucket: "bikenow-2aea3.appspot.com",
  messagingSenderId: "302340816791",
  appId: "1:302340816791:web:45cdbaa86758a765250ed2",
  measurementId: "G-VH3L7ZNCYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
