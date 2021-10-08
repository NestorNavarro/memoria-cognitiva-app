import React from 'react'
import { Button } from '@mui/material';
import { useHistory } from 'react-router';

const GameOver = ({score, route}) => {
    const history = useHistory();
    console.log(score)
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
