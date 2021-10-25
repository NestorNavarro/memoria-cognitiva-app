import { Button } from "@mui/material";

import "./styles.css";

const WordsActPage = ({
    delegations : {
        word : {
            value,
        },
        validateAnswer,
    }
}) => {
    return (
        <div className="container">
            <div className="card card-content">
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
    );
}
export default WordsActPage;
