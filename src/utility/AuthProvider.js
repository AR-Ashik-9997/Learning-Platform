import React, { createContext, useEffect, useState } from "react";
import app from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth";

export const AuthContext = createContext();

const auth=getAuth(app);
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return()=>{
            unsubscribe();
        }
    },[])
    const register=(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile);
    }  
    const signInGoogle=(provider)=>{
        return signInWithPopup(auth,provider)
    }  
    
    const authInfo={user,register, updateProfile,signInGoogle}
  return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
