import { Button }      from "@mui/material";
import { useDispatch } from "react-redux";
import { showModal }   from "../../../store/Actions/uiActions";

import "./styles.css";

const AddBtn = () => {
    const dispatch = useDispatch();

    const handleAddNote = () => {
        dispatch( showModal() );
    };

    return (
        <div className="btn-conttainer ">
            <Button
                 variant="contained" 
                 size="large"
                onClick={handleAddNote}
            >
                <i className="far fa-plus-square btn-icon"></i>
                Agregar Nota
            </Button>
        </div>
    );
};
export default AddBtn;