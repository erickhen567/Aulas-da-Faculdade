import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: 'AIzaSyDdoB1OLoLabmqqdKETNIdxekV6oQhNBhs',
  authDomain: 'cadastro-c336b.firebaseapp.com',
  projectId: 'cadastro-c336b',
  storageBucket: 'cadastro-c336b.firebasestorage.app',
  messagingSenderId: '809884068637',
  appId: '1:809884068637:web:e6c0409eb69d6a82b1cff4',
};
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
