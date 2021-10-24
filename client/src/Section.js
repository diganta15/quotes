import React,{useContext, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { RegisterForm } from "./components/RegisterForm";
import { NotFound } from "./404";
import { Dashboard } from "./components/Dashboard";
import { SingleQuote } from "./components/Quotes/SingleQuote";
import { Quotes } from "./components/Quotes/Quotes";
import { UploadForm } from "./components/UploadForm";
import AuthContext from './context/auth/authContext';
import { PrivateRoute } from './routing/PrivateRoute';

export const Section = () => {

    const authContext = useContext(AuthContext);
    const {loaduser} = authContext;
    useEffect(()=>{
       
        if(localStorage.token){
      
            loaduser(localStorage.token);
        }
    },[]);
    return (
        <div>
            <Router>
            <div className='section'>
                <Header />
                <Switch>
                    <Route exact path='/' component={Quotes} />
                    <PrivateRoute exact path='/upload' component={UploadForm} />
                    <Route exact path='/register' component={RegisterForm} />
                    <Route exact path='/login' component={Login} />
                    <PrivateRoute exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/quote/:id' component={SingleQuote} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            </Router>
        </div>
    )
}
