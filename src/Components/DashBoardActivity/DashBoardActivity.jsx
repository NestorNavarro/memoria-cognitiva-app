import { Button } from '@mui/material';
import React from 'react'
import Carousel from '../ui/Carousel';

import "./styles.css";
const DashBoardActivity = ({ 
    activity = "",
    instructions = "",
    setStartGame=()=>{}
}) => {
    return (
        <>
            <div className="container">
            <div className="card card-content">
                    <h1>{activity}</h1>
                    <h3 className="instructions">{instructions}</h3>
                    <Button
                        className="mt-2"
                        variant="contained"
                        onClick={() => setStartGame(true)}
                    >
                    Comenzar
                    </Button>
                </div> 
            </div>
            <Carousel />
        </>
    );
}
 export default DashBoardActivity;