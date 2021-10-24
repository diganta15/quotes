import React,{useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

export const PrivateRoute = ({component:Component,...rest}) => {
    const authContext = useContext(AuthContext);
    const {userEmail} = authContext;
    return (
      <Route {...rest} render={props=> userEmail ==null ?(<Redirect to='/login' />): (<Component {...props}/>)} />
    )
}
