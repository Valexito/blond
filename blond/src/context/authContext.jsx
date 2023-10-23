import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  AuthErrorCodes,
} from "firebase/auth";
import { auth } from "../firebase";
// import { doc, setDoc } from "firebase/firestore";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [currentuser, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //Add
  const [error, setError] = useState()
  //Modify code
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password).catch(err => {
    if (err.code === "auth/email-already-in-use") {

      setInterval(() => {
        setError("")
      }, 5000)
      setError("El correo ya está en uso")
    }
    else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {

      setInterval(() => {
        setError("")
      }, 5000)
      setError("La contraseña debe de ser mayor a 6 caracteres")
    }

    else {
      setError(err.message)
    }
  })
  //End Modify code
  const signin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signout = () => signOut(auth);

  const SigninWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(true);

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        error,
        signin,
        currentuser,
        signout,
        loading,
        SigninWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
