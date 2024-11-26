import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from 'firebase/auth';
  import { auth } from '../config/firebase';
  
  export const authService = {
    login: (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password);
    },
    
    register: (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password);
    },
    
    logout: () => {
      return signOut(auth);
    },
    
    onAuthStateChange: (callback: (user: any) => void) => {
      return onAuthStateChanged(auth, callback);
    }
  };