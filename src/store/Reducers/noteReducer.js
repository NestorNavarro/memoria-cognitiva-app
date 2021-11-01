import { types } from "../types";

const intialState = {
    notes : [],
    edit  : null,
}

export const noteReducers = (state = intialState, action) => {
    switch (action.type) {
        case types.noteSetNotes:
            return {
                ...state,
                notes : action.payload,
            }
        case types.noteAddNew:
            return {
                ...state,
                notes: [action.payload,  ...state.notes],
            }
        case types.noteEdit:
            return{
                ...state,
                edit: {
                    _id   : action.payload._id,
                    title : action.payload.title,
                    body  : action.payload.body,
                } 
            }
        case types.noteEditClean:
            return {
                ...state,
                edit: null,
            }
        case types.noteUpdate:
            return{
                ...state,
                notes: state.notes.map(
                    note => note._id === action.payload._id
                    ? action.payload
                    : note
                )
            }
        case types.noteDelete:
            return{
                ...state,
                active: null,
                notes: state.notes.filter(
                    note => note._id !== action.payload.id
                )
            }
        case types.noteCleaning:
            return intialState;
        default:
            return state;
    }
}