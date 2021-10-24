import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

//Our Importations
import WordsActPage   from "../Pages/WordsActPage";
import PhraseActPage  from "../Pages/PhraseActPage";
import NumberActPage  from "../Pages/NumberActPage";
import ShapesActPage  from "../Pages/ShapesActPage";
import DashboardPage  from "../Pages/DashboardPage";
import ActivitiesPage from "../Pages/ActivitiesPage";
import MemoryGamePage from "../Pages/MemoryGamePage";
import NavBar         from "../Components/ui/NavBar";

export const DashboardRouter = (props) => {
    return (
        <>
            <NavBar {...props} />
            <Switch>
                <Route exact path="/dashboard/words"       component={WordsActPage}   {...props}/>
                <Route exact path="/dashboard/number"      component={NumberActPage}  {...props}/>
                <Route exact path="/dashboard/shapes"      component={ShapesActPage}  {...props}/>
                <Route exact path="/dashboard/phrase"      component={PhraseActPage}  {...props}/>
                <Route exact path="/dashboard/memory_game" component={MemoryGamePage} {...props}/>

                <Route exact path="/dashboard/porfile"     component={DashboardPage}  {...props}/>
                <Route exact path="/dashboard/activities"  component={ActivitiesPage} {...props}/>

                <Redirect to="/dashboard/porfile" />
            </Switch>
        </>
    );
}
