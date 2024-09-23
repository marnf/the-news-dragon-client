import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner animation="grow" />
    }

    if(user){
        return children;
    }

    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivetRoute;



// steps
/**
 * 1.check user is logged in or not
 * 2.if user is logged in , then allowed them to visit the route
 * 3.else redirect the user to the login page
 */