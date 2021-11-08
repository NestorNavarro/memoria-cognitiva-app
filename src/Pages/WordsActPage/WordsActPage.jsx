import { Button } from "@mui/material";

//Our Importations
import DashBoardActivity from "../../Components/DashBoardActivity";
import "./styles.css";

const testName     = "RECUERDA LA PALABRA";
const instructions = "WORDS";

const WordsActPage = ({
    delegations : {
        word : {
            value,
        },
        word,
        ronunds,
        startGame,
        setStartGame,
        validateAnswer,
    }
}) => {
    return (
        <>
         { !startGame ?
            <DashBoardActivity activity={testName}  instructions={instructions} setStartGame={setStartGame}/>
            :
            <div className="container">
                <div className="card card-content">
                    <h3>Ronda: {ronunds}</h3>
                    <h1 className="mt-5">{value}</h1>
                    <div className="buttons-group mt-4">
                        <Button
                            size="large"
                            variant="contained" 
                            onClick={() => validateAnswer("new")}
                        >
                            Palabra Nueva
                        </Button>
                        <Button
                            size="large"
                            variant="contained" 
                            onClick={() => validateAnswer("repet")}
                        >
                            Palabra Repetida
                        </Button>
                    </div>
                </div>
            </div>
        }
        </>
    );
}
export default WordsActPage;
