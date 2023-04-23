import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
// import {  onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    // eslint-disable-next-line
    const [currentUser, setCurrentUser] = useState()
    const [err, setErr] = useState('')

    function signup(displayName, email, password) {
        createUserWithEmailAndPassword(auth, displayName, email, password)
            .then(user => { console.log('user', user.user) })
            .catch(err => {
                const errcod = err.code
                console.log('errcod', errcod)
                const errmsg = err.message
                console.log('errmsg', errmsg)
            })


    }
    async function signin(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then(user => { console.log('user', user.user) })
            .catch(err => {
                const errcod = err.code
                console.log('errcod', errcod)
                const errmsg = err.message
                setErr(err.message)
                console.log('errmsg', errmsg)
            })


    }
    function signout() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('successful signout')
        }).catch((error) => {
            // An error happened.
            console.log('err', error)
        });

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log('current user', user)
        })
        return unsubscribe

    }, [])

    const value = {
        currentUser,
        signin,
        signup,
        signout,
        err
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
