import React from 'react';
import useFirebase from './../Hooks/useFirebase';

export const Context = React.createContext();

const AuthProvider = ({ children }) => {
    const { user, signInGoogle, logout, isLoading, authError } = useFirebase();
    return (
        <Context.Provider value={{ firebase: { user, isLoading, authError, signInGoogle, logout } }}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;