import React from "react";
import classNames from "classnames";
import {  ButtonBase } from "@mui/material";

//Our Importations
import GameOver from "../../Components/GameOver";
import DashBoardActivity from "../../Components/DashBoardActivity";
import "./styles.css";

const testName     = "RECUERDA LA SECUENCIA DE FIGUARAS";
const instructions = "SEQUENCE";

const ShapesActPage = ({
    delegations : {
        gameOver,
        startGame,
        shapeFocus,
        isDisabled,
        setStartGame,
        sequenceStack,
        handleOnClick,
    }
}) => {
    return (
        <>
        { !startGame ?
            <DashBoardActivity activity={testName} instructions={instructions} setStartGame={setStartGame}/>
            :
            ( gameOver ?
                <GameOver score={sequenceStack?.length} route="/dashboard/shapes"/>
                :
                <div className="container">
                    <div className="card card-content">
                        <h3>Ronda: { sequenceStack.length }</h3>
                        <div className="row-shapes">
                                <ButtonBase
                                    id="0"
                                    className={classNames("square", {
                                        focused : "0" in shapeFocus,
                                    })}
                                    disabled={isDisabled}
                                    onClick={handleOnClick}
                                />
                                <ButtonBase
                                    id="1"
                                    className={classNames("circle", {
                                        focused : "1" in shapeFocus,
                                    })}
                                    disabled={isDisabled}
                                    onClick={handleOnClick}
                                />
                                <ButtonBase
                                    id="2"
                                    className={classNames("rectangle", {
                                        focused : "2" in shapeFocus,
                                    })}
                                    disabled={isDisabled}
                                    onClick={handleOnClick}
                                />
                                <ButtonBase
                                    id="3"
                                    className={classNames("oval", {
                                        focused : "3" in shapeFocus,
                                    })}
                                    disabled={isDisabled}
                                    onClick={handleOnClick}
                                />
                        </div>
                    </div>
                </div>
            )
        }
        </>
    );
}

export default ShapesActPage;
