import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllNotes } from "../../store/Actions/noteActions";
import NotesPage from "./NotesPage";

const NotesPageContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAllNotes());
    }, [dispatch]);
    return (
        <NotesPage />
    );
};
export default NotesPageContainer;
