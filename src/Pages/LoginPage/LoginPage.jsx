import React from "react";
import {TextField, Button} from '@mui/material';

import { Link } from "react-router-dom";
import "./styles.css";

const LoginPage = () => {
    return (
            <div className="login-wrapper">
                <div className="card login-content">
                    <h2 className="text-center">Iniciar sesión</h2>
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
                    <Button 
                        className="mt-4"
                        variant="contained" 
                        size="large"
                    >
                        Iniciar
                    </Button>
                    <div className="register-group mt-4">
                        <h5>¿Nuevo usuario?</h5>
                        <Link to="/auth/register">
                            Registrarse
                        </Link>
                    </div>
                </div>
            </div>
    );
}

export default LoginPage;
