import React from "react";
import { Button } from "@mui/material";
import "./styles.css";

const AddBtn = () => {
    return (
        <div className="btn-conttainer ">
            <Button
                 variant="contained" 
                 size="large"
                // onClick={handleAddNote}
            >
                <i className="far fa-plus-square btn-icon"></i>
                Agregar Nota
            </Button>
        </div>
    );
};
export default AddBtn;