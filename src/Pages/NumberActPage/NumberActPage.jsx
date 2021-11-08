import { TextField, Box, Button } from "@mui/material";
import LinearProgress             from '@mui/material/LinearProgress';

// Our Importations
import DashBoardActivity from "../../Components/DashBoardActivity";
import "./styles.css"

const testName     = "RECUERDA EL NÚMERO";
const instructions = "NUMBER";

const NumberActPage = ({
    delegations : {
        answer,
        ronunds,
        progress,
        isLoading,
        startGame,
        setAnswer,
        randomNumber,
        setStartGame,
        handleSubmit,
    }
}) => {
    return (
        <>
        { !startGame ?
            <DashBoardActivity activity={testName}  instructions={instructions} setStartGame={setStartGame}/>
            :
            <form 
                className="container"
                onSubmit={handleSubmit}
            >
                <div className="card card-content">
                    { isLoading ?
                        <>
                            <h1 className="number">{randomNumber}</h1>
                            <Box className="mt-5" sx={{ width: '50%' }}>
                                <LinearProgress variant="determinate" value={progress} />
                            </Box>
                        </>
                        :
                        <>
                            <h1>Ingresa el número</h1>
                            <TextField
                                autoFocus={true}
                                hiddenLabel
                                type="number"
                                variant="filled"
                                value={answer}
                                onChange={({ target }) => setAnswer(target.value)}
                                sx={{
                                    width : "250px",
                                }}
                            />
                            <Button
                                className="mt-2"
                                onClick={handleSubmit}
                            >
                                Responder
                            </Button>
                        </>
                    }
                </div>
            </form>
        }        
        </>
    );
}
export default NumberActPage;