import React from "react";
import {TextField, Button} from '@mui/material';

import { Link } from "react-router-dom";
import "./styles.css";

const LoginPage = ({
    delegations :{
        lEmail,
        lPassword,
        handleLogin,
        handleLoginInputChange,
    }
}) => {
    return (
            <form onSubmit={handleLogin} className="login-wrapper">
                <div className="card login-content">
                    <h2 className="text-center">Iniciar sesión</h2>
                    <TextField 
                        className="mt-4"
                        type="email" 
                        label="Correo" 
                        variant="filled"
                        autoComplete="off"
                        name="lEmail"
                        value={lEmail}
                        onChange={handleLoginInputChange}
                    />
                    <TextField 
                        className="mt-4"
                        type="password" 
                        label="Contraseña" 
                        variant="filled"
                        autoComplete="off"
                        name="lPassword"
                        value={lPassword}
                        onChange={handleLoginInputChange}
                    />
                    <Button
                        onClick={handleLogin}
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
            </form>
    );
}

export default LoginPage;
