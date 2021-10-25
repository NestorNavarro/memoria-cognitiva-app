import React, { useEffect, useState } from "react";

//My imports
import NumberActPage from "./NumberActPage.jsx";

const NumberActPageContainer = () => {
    const [progress, setProgress]         = useState(0);
    const [ronunds, setRounds]            = useState(1);
    const [answer, setAnswer]             = useState("");
    const [isLoading, setIsLoading]       = useState(true);
    const [isCorrect, setIsCorrect]       = useState(true);
    const [startGame, setStartGame]       = useState(false);
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 9));

    const getRandomNumberByLevel = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(answer) === randomNumber) {
            setRounds((value) => value + 1);
        } else {
            setIsCorrect(false);
        }
        setAnswer("");
        const {min, max} = getNumber();
        setRandomNumber(getRandomNumberByLevel(min, max));
        setIsLoading(true);
    }

    const getNumber = () => {
        let maxNumber = "1";
        let minNumber = "1";
        for (let i=0;i<=ronunds;i++) {
            maxNumber += "0";
            if(i + 1 <= ronunds) {
                minNumber += "0";
            }
        }
        return {
            min : Number(minNumber),
            max : Number(maxNumber)
        };
    }

    useEffect(() => {
        if (isLoading && startGame) {
            const timer = setInterval(() => {
              setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    setIsLoading(false);
                    return 0;
                }
                return oldProgress + 20;
              });   
            }, 500);
            
            return () => {
            clearInterval(timer);
            };
        }
      }, [isLoading, startGame]);

    return (
        <NumberActPage
            delegations={{
                answer,
                ronunds,
                progress,
                isLoading,
                isCorrect,
                startGame,
                setAnswer,
                randomNumber,
                setStartGame,
                handleSubmit,
            }}
        />
    );
}
export default NumberActPageContainer;
