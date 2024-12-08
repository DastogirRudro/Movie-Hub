import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from './firebase.init';
export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    const [users,setUser] =useState(null)
    const[loading,setLoading]= useState(true)
    //for sign up
    console.log(users)
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut =() => {
        setLoading(true)
        return signOut(auth)
    }
    const userLogin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (updatedData) => {
            return updateProfile(auth.currentUser,updatedData)
    }
    //for google sign in
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = ()=>{
        setLoading(true)
        signInWithPopup(auth,googleProvider)
    }
    //password loading
    const setPassword =(email)=> {
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
    const userInfo ={
       users,
       setPassword,
       loading,
       setUser,
       createUser,
       updateUserProfile,
       googleLogin,
       logOut,
       userLogin,
       loading
    }
  
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;