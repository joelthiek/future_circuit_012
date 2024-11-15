import { auth } from '../firebase/firebaseConfig';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
export const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
};