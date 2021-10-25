import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

//Our importations
import LoginPage    from "../Pages/LoginPage"; 
import RegisterPage from "../Pages/RegisterPage"; 

export const AuthRouter = ({props}) => {
    return (
        <>
            <Switch>
                <Route exact path="/auth/login" component={LoginPage} {...props} />
                <Route exact path="/auth/register" component={RegisterPage} {...props} />
                <Redirect to="/auth/login" />
            </Switch>
        </>
    );
}
