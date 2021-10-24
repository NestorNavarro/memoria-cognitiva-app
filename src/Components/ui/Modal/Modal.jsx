import { Button, TextField } from '@mui/material';

import "./styles.css";

const Modal = ({
    delegations : {
        body,
        title, 
        handleClose,
        handleSubmit,
        handleInputChange,
    },
}) => {

    return (
        <div className="modal__container">
            <div className="modal-own">
                <div className="modal__header">
                    <div style={{ display : "flex" , gap : "5px"}}>
                        <i className="fas fa-plus" />
                        <h3 className=" ml-5-own">Agregar Nota</h3>
                    </div>
                    <i 
                        className="fas fa-times modal__close"
                        onClick={handleClose}
                    />
                </div>

                <div className="modal__content">
                    <form 
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            className="mb-5"
                            name="title"
                            variant="filled"
                            value={title}
                            autoComplete="off"
                            label="Ingresa el título"
                             onChange={handleInputChange}
                        />
                        <TextField
                            rows={4}
                            fullWidth 
                            multiline
                            name="body"
                            value={body}
                            variant="filled"
                            autoComplete="off"
                            label="Cuerpo de la nota"
                            onChange={handleInputChange}
                        />
                        <hr />
                        <Button
                            type="submit"
                            className="btn-own btn-modal "
                        >
                            Añadir Nota
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;