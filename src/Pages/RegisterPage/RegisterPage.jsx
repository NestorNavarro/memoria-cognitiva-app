import React from "react";
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";

import { Link } from "react-router-dom";
import "./styles.css";

const RegisterPage = ({
    delegation: {
        gender,
        handleSelectGender,
    }
}) => {
    return (
        <div className="register-wrapper">
            <div className="card register-content">
                <h2 className="text-center">Registro</h2>
                <TextField
                    className="mt-4"
                    type="text"
                    label="Nombre"
                    variant="filled"
                />
                <div className="register-register mt-4">
                    <TextField
                        sx={{ minWidth: 300 }}
                        type="number"
                        label="Edad"
                        variant="filled"
                    />
                    <FormControl variant="filled" sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">Genero</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={gender}
                        onChange={handleSelectGender}
                        >
                            <MenuItem value={"masculino"}>Masculino</MenuItem>
                            <MenuItem value={"femenino"}>Femenino</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <TextField
                    className="mt-4"
                    type="email"
                    label="Correo"
                    variant="filled"
                />
                <TextField
                    className="mt-4"
                    type="password"
                    label="Contraseña"
                    variant="filled"
                />
                <TextField
                    className="mt-4"
                    type="password"
                    label="Confirmar Contraseña"
                    variant="filled"
                />
                <Button className="mt-4" variant="contained" size="large">
                    Iniciar
                </Button>
                <Link className="mt-4" to="/auth">
                    Regresar
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
