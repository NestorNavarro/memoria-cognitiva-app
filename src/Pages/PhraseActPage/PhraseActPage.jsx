import { TextField, Button }   from "@mui/material";

// Our Importations
import DashBoardActivity    from "../../Components/DashBoardActivity";
import "./styles.css"

const testName    = "COMPLETA LA FRASE";
const instructions = "PHRASE";

const PhraseActPage = ({
    delegations : {
        ronunds,
        answerOne,
        answerTwo,
        startGame,
        actualPhrase,
        setAnswerOne,
        setAnswerTwo,
        setStartGame,
        handleSubmit,
    }
}) => {
    return (
        <>
        { !startGame ?
            <DashBoardActivity activity={testName}  instructions={instructions} setStartGame={setStartGame}/>
            :
            <form className="container">
                <div className="card card-content">
                    <h2 className="mb-2">Ronda: {ronunds}</h2>
                    <h1 className="mt-5">{actualPhrase?.phrase ?? ""}</h1>
                    <div className="buttons-group mt-4">
                        <TextField
                            autoFocus={true}
                            hiddenLabel
                            type="text"
                            variant="filled"
                            value={answerOne}
                            placeholder="(1)"
                            onChange={({target}) => setAnswerOne(target.value)}
                            sx={{
                                width : "250px",
                            }}
                        />
                            
                        <TextField 
                            hiddenLabel
                            type="text"
                            variant="filled"
                            value={answerTwo}
                            placeholder="(2)"
                            onChange={({target}) => setAnswerTwo(target.value)}
                            sx={{
                                width : "250px",

                            }}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="mt-2"
                        onClick={handleSubmit}
                    >
                        Responder
                    </Button>
                </div>
            </form>
        }
        </>
    );
}

export default PhraseActPage;
