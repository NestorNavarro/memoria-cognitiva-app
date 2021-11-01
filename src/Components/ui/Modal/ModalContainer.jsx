import { useDispatch, useSelector } from "react-redux";

import Modal                      from "./Modal.jsx";
import useForm                    from "../../../hooks/useForm";
import { closeModal }             from "../../../store/Actions/uiActions";
import { 
    createNote, 
    updateNoteService,
    editNoteClean,
} from "../../../store/Actions/noteActions";


const ModalContainer = () => {
    const dispatch = useDispatch();
    const { edit } = useSelector(state => state.note); 

    const [ formValue, handleInputChange ] = useForm({
        title :   edit?.title ?? "",
        body  :   edit?.body  ?? "",
    });

    const {title, body} = formValue;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(edit) {
            dispatch( updateNoteService(title, body, edit._id) );
            handleClose();
        } else {
            if(isFormValid()){
                dispatch( createNote(title, body) );
                handleClose();
            }
        }
      
    }

    const handleClose = () => {
        dispatch(closeModal());
        dispatch( editNoteClean() );
    };

    const isFormValid = () => {
        if(title.length < 1 || body.length < 1){
            console.log('no title')
            return false;
        }
        return true;
    };

    return (
        <Modal
            delegations={{
                body,
                title, 
                handleClose,
                handleSubmit,
                handleInputChange,
            }}
        />
    );
};
export default ModalContainer;
