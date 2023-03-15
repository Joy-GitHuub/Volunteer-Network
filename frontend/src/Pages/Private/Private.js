import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Shared/Loader/Loader';

const Private = ({ children, ...rest }) => {
    const { firebase } = useAuth();
    const location = useLocation();
    const { user, isLoading } = firebase;
    if (isLoading) {
        return <Loader />
    };
    if (user?.email) {
        return children;
    }

    return <Navigate to="/register" state={{ from: location }} />;
};

export default Private;