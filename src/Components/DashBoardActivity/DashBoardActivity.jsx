import { Button } from '@mui/material';
import React from 'react'

const DashBoardActivity = ({ activity = "", setStartGame}) => {
    return (
        <div className="container">
           <div className="card card-content">
                <h1>{activity}</h1>
                <Button
                    className="mt-2"
                    variant="contained"
                    onClick={() => setStartGame(true)}
                >
                   Comenzar
                </Button>
            </div> 
        </div>
    );
}
 export default DashBoardActivity;