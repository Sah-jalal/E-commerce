import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthenContext = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user, setUser] = useState('');

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const LoginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signOutUser = () =>{
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
             console.log('user obserbing');
             setUser(currentUser);
         })
       return () => {
         unsubscribe()
       };
     }, [])

    const authInfo = {
        createUser,
        LoginUser,
        signOutUser,
        user,
    }
    return (
        <AuthenContext.Provider value={authInfo}>
            {children}
        </AuthenContext.Provider>
    );
};

export default AuthContext;