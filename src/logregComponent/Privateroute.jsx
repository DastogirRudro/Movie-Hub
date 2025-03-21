import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const Privateroute = ({children}) => {
    const{users,loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <Loading></Loading>
    }
    if(users && users?.email) {
        return children
    }
     return <Navigate state={location.pathname} to={"/login"} ></Navigate>;
  
};

export default Privateroute;