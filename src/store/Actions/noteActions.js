import { types }          from "../types";
import { fetchWithToken } from "../../helpers/fetch";
import Swal from "sweetalert2";

export const createNote = (title, body) => {
    return async(dispatch) => {
        try {
            const rep  = await fetchWithToken('notes', {title, body}, 'POST');
            const data = await rep.json();
    
            if (data.ok) {
                dispatch(addNewNote(title, body, data.note._id));
            } else {
                Swal.fire("Error", "La nota no se pudo crear correctamente" , "error");
            }
        } catch (error) {
            console.log("[Error] create note ", error);
        }
    };
};

export const setAllNotes = () => {
    return async(dispatch) => {
        try {
            const rep  = await fetchWithToken('notes');
            const body = await rep.json();

            if (body.ok) {
                dispatch(setNotes(body.notes));
            } else {
                Swal.fire("Error", "No se pudieron cargar las notas correctamente" , "error");
            }

        } catch (error) {
            console.log("Error on setAllNotes", error);
        }
    };
};

export const updateNoteService = (title, body, _id) => {
    return async(dispatch) => {
        try {
            const rep  = await fetchWithToken(`notes/${_id}`, {title, body}, 'PUT');
            const data = await rep.json();
    
            if (data.ok) {
                dispatch(updateNote(title, body, data._id));
            } else {
                Swal.fire("Error", "No se puedo editar la nota" , "error");
            }
        } catch (error) {
            console.log("Error on updateNote", error);
        }
    };
};

export const deleteNoteService = (_id) => {
    return async (dispatch) => {
        console.log(_id);
        try {
            const rep  = await fetchWithToken(`notes/${_id}`, {}, "DELETE");
            const body = await rep.json();
    
            if (body.ok) {
                dispatch(deleteNote(_id));
            } else {
                Swal.fire("Error", "No se puedo eliminar la nota" , "error");
            }
        } catch (error) {
            console.log("Error on deleteNoteService", error);
        }
    };
};

const addNewNote = (title, body, _id) => ({
    type: types.noteAddNew,
    payload: {
        note : {
            title,
            body,
        },
        _id,
    }
});

const setNotes = (notes) => ({
    type : types.noteSetNotes,
    payload : notes,
});

export const editNote = (title, body, _id) => ({
    type: types.noteEdit,
    payload: {
        _id,
        title,
        body,
    }
});

export const editNoteClean = () => ({
    type: types.noteEditClean,
});


export const updateNote = (title, body, _id) => ({
    type: types.noteUpdate,
    payload: {
        note : {
            title,
            body,
        },
        _id,
    }
});

const deleteNote = (id) => ({
    type: types.noteDelete,
    payload: {
        id,
    }
});

export const cleaningNote = () => ({
    type: types.noteCleaning,
});