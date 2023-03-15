import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from './../FIrebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const [authError, setAuthError] = React.useState('');

    const auth = getAuth();


    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    };

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
        }).finally(() => setIsLoading(false));
    };


    React.useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);


    return { user, isLoading, authError, signInGoogle, logout }
};

export default useFirebase;