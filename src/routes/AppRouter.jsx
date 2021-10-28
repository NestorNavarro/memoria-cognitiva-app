import React, { useEffect }         from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";

//Our importations
import { AuthRouter }      from "./AuthRouter";
import { PublicRoute }     from "./PublicRoute";
import { PrivateRoute }    from "./PrivateRoute";
import { DashboardRouter } from "./DashboardRouter";
import { startChecking }   from "../store/Actions/authActions";

//dev
export const AppRouter = () => {
    const dispatch = useDispatch();
    const {checking, userInfo} = useSelector(state => state.auth);
    
    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch]);

    if(checking) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute path="/dashboard" isAuth={ !!userInfo?.uid } component={ DashboardRouter } />
                    <PublicRoute  path="/auth" isAuth={ !!userInfo?.uid } component={ AuthRouter } />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
}
