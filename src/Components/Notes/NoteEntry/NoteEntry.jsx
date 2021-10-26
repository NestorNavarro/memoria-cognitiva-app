import { useDispatch } from "react-redux";
import { showModal }            from "../../../store/Actions/uiActions";
import { deleteNote, editNote } from "../../../store/Actions/noteActions";

import "./styles.css";

const NoteEntry = ({ 
    note = {},
}) => {
    const dispatch = useDispatch();

    const handleEditNote = () => {
        dispatch( editNote(note?.title, note?.body) );
        dispatch( showModal() );
    }
    const handleDelete = () => {
        dispatch( deleteNote(note?.title) );
    }
    return (
        <div className="col">
            <div className="card ">
                <div className="notes__entry-head">
                    <h3 className="notes__entry-title"> {note?.title} </h3>
                    <div className="notes__head-icons">
                        <i 
                            className="far fa-edit  fa-lg mr-5-own" 
                            onClick={handleEditNote}
                        />
                        <i 
                            className="fas fa-times  fa-lg" 
                            onClick={handleDelete}
                        />
                    </div>
                </div>
                <hr/>
                <div className="notes__entry-body">
                    <p className="card-text">
                        {note?.body}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default NoteEntry;