import React from 'react'
import { Button } from '@mui/material';
import { useHistory, useParams } from 'react-router';

const GameOver = () => {
    const {test, score}= useParams();

    const history = useHistory();
    return (
        <div className="container">
            <div className="card card-content">
                <h1>Puntución Final</h1>
                <h3>{score-1}</h3>
                <Button
                       className="mt-2"
                       variant="contained"
                       onClick={() => history.replace(`/dashboard/${test}`)}
                >
                    Volver a Jugar
                </Button>
            </div>
        </div>
    );
}

export default GameOver;
