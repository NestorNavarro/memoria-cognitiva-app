import { TextField, Box } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

import "./styles.css"

const NumberActPage = ({
    delegations : {
        answer,
        progress,
        isLoading,
        setAnswer,
        randomNumber,
        handleSubmit,
    }
}) => {

    return (
        <form 
            className="container"
            onSubmit={handleSubmit}
        >
            <div className="card card-content">
                { isLoading &&
                    <>
                        <h1 className="number">{randomNumber}</h1>
                        <Box className="mt-5" sx={{ width: '50%' }}>
                            <LinearProgress variant="determinate" value={progress} />
                        </Box>
                    </>
                }
                { !isLoading && 
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
                    </>
                }

            </div>
        </form>
    );
}
export default NumberActPage;