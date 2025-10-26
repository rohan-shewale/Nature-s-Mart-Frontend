import { Redirect } from "react-router-dom";
import { Component } from 'react';
import AuthenticateService from "./login/AuthenticateService";
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import { Navigate } from "react-router-dom";
class AuthenticatedRout extends Component
{
    render()
    {
        if(AuthenticateService.isUserLoggedIn())
        {
            return <Route {...this.props}/>
        }
        else{
            return <Navigate to="/"/>
        }
    }
}
export default AuthenticatedRout;