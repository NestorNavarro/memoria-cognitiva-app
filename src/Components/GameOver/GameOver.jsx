import React from 'react'
import { Button } from '@mui/material';
import { useHistory } from 'react-router';

const GameOver = ({score = 0, route = "/"}) => {
    const history = useHistory();
    return (
        <div className="container">
            <div className="card card-content">
                <h1>Puntución Final</h1>
                <h3>{score-1}</h3>
                <Button
                       className="mt-2"
                       variant="contained"
                       onClick={() => history.replace(route)}
                >
                    Volver a Jugar
                </Button>
            </div>
        </div>
    );
}

export default GameOver;
