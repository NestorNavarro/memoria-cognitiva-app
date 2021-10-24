import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";

//Our importations
import { AuthRouter }   from "./AuthRouter";
import { PublicRoute }  from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute path="/dashboard" isAuth={ isAuth } component={ DashboardRouter } />
                    <PublicRoute  path="/auth" isAuth={ isAuth } component={ AuthRouter } />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
}
