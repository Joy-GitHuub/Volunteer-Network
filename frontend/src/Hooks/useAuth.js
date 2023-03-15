import React from 'react';
import { Context } from './../Context/AuthProvider';

const useAuth = () => {
    const auth = React.useContext(Context);
    return auth;
};

export default useAuth;