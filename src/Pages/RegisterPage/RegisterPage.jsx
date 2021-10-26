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
        rAge,
        rName,
        rEmail,
        gender,
        rPassword1,
        rPassword2,
        handleRegister,
        handleSelectGender,
        handleRegisterInputChange,
    }
}) => {
    return (
        <form onSubmit={handleRegister} className="register-wrapper">
            <div className="card register-content">
                <h2 className="text-center">Registro</h2>
                <TextField
                    className="mt-4"
                    type="text"
                    label="Nombre"
                    variant="filled"
                    name="rName"
                    value={rName}
                    onChange={handleRegisterInputChange}
                />
                <div className="register-register mt-4">
                    <TextField
                        sx={{ minWidth: 300 }}
                        type="number"
                        label="Edad"
                        variant="filled"
                        name="rAge"
                        value={rAge}
                        onChange={handleRegisterInputChange}
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
                    name="rEmail"
                    value={rEmail}
                    onChange={handleRegisterInputChange}
                />
                <TextField
                    className="mt-4"
                    type="password"
                    label="Contraseña"
                    variant="filled"
                    name="rPassword1"
                    value={rPassword1}
                    onChange={handleRegisterInputChange}
                />
                <TextField
                    className="mt-4"
                    type="password"
                    label="Confirmar Contraseña"
                    variant="filled"
                    name="rPassword2"
                    value={rPassword2}
                    onChange={handleRegisterInputChange}
                />
                <Button
                    type="submit"
                    onClick={handleRegister}
                    className="mt-4" 
                    variant="contained" 
                    size="large"
                >
                    Registrarse
                </Button>
                <Link className="mt-4" to="/auth">
                    Regresar
                </Link>
            </div>
        </form>
    );
};

export default RegisterPage;
