import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext =  createContext(null);
const Auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const logOut =() =>{
        setLoader(true)
        return signOut(Auth);
    }
    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(Auth,currentUser =>{
            console.log('user', currentUser);
            setUser(currentUser);
            setLoader(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

const AuthInfo = {
  user,
  loader,
  createUser,
  signOut,
  logOut,
  signIn,
}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;