import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavBar from "../Components/ui/NavBar";

import DashboardPage    from "../Pages/DashboardPage";

export const DashboardRouter = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Redirect to="/" />
            </Switch>
        </>
    );
}
