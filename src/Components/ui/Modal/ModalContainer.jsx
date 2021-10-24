import { useDispatch, useSelector } from "react-redux";

import Modal                      from "./Modal.jsx";
import useForm                    from "../../../hooks/useForm";
import { closeModal }             from "../../../store/Actions/uiActions";
import { 
    addNewNote, 
    updateNote,
    editNoteClean,
} from "../../../store/Actions/noteActions";


const ModalContainer = () => {
    const dispatch = useDispatch();
    const { edit } = useSelector(state => state.note); 

    const [ formValue, handleInputChange ] = useForm({
        title :   edit?.title ?? "",
        body  :    edit?.body ?? "",
    });

    const {title, body} = formValue;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(edit) {
            dispatch( updateNote(edit.title, title, body) );
            handleClose();
        } else {
            if(isFormValid()){
                dispatch( addNewNote(title, body) );
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

    // useEffect(() => {
    //     if(edit?.title){
    //         defaultValues.title = edit.title;
    //         defaultValues.body  = edit.body;
    //     }
    // }, [edit?.title, edit?.body, defaultValues]);

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
