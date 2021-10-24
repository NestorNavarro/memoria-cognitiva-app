import React from "react";
import { useHistory } from "react-router";
import { Button, styled } from "@mui/material";

import IconText from "../../Components/IconText";
import "./styles.css";

const Btn = styled(Button)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign  : 'center',
    padding    : theme.spacing(1),
    background : "#fff",
    width      : "300px",
    height     : "300px",
    fontSize   : "16px",
    fontWeight : "bolder",
    color      : theme.palette.text.secondary,
}));

const ActivitiesPage = () => {
    const history = useHistory();

    return (
        <div className="container-buttons">
            <div className="col-btn ">
                <Btn
                    onClick={() => { history.push("/dashboard/number")}}
                >
                    <IconText icon="fas fa-calculator" text="recuerda el número" />
                </Btn>
                <Btn
                    onClick={() => { history.push("/dashboard/shapes")}}
                >
                    <IconText icon="fas fa-shapes" text="Recuerda la secuencia de las figuras" />
                </Btn>
                <Btn
                    onClick={() => { history.push("/dashboard/memory_game")}}
                >
                    <IconText icon="fas fa-clone" text="Memorama" />
                </Btn>
            </div>
        <div className="col-btn mt-4">
            <Btn
                   onClick={() => { history.push("/dashboard/words")}}
            >
                <IconText icon="fas fa-sort-alpha-up" text="Recuerda las palabras" />
            </Btn>
            <Btn
                     onClick={() => { history.push("/dashboard/phrase")}}
            >
                <IconText icon="fas fa-feather-alt" text="Completa la frase" />
            </Btn>
            <Btn
                onClick={() => { }}
            >
                <IconText icon="fas fa-book" text="Tu diario" />
            </Btn>
        </div>
    </div>
    );
}

export default ActivitiesPage;
