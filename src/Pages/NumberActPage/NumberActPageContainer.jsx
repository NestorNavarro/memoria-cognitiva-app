import React, { useEffect, useState } from "react";
import NumberActPage from "./NumberActPage.jsx";

const NumberActPageContainer = () => {
    const [progress, setProgress]         = useState(0);
    const [answer, setAnswer]             = useState("");
    const [ronunds, setRounds]            = useState(1);
    const [isLoading, setIsLoading]       = useState(true);
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 9));

    const getRandomNumberByLevel = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Number(answer), randomNumber)
        if (Number(answer) === randomNumber) {
            console.log("correct");
        } else {
            console.log("incorrect");
        }
        setAnswer("");
        const {min, max} = getNumber();
        setRandomNumber(getRandomNumberByLevel(min, max));
        setIsLoading(true);
    }

    const getNumber = () => {
        let maxNumber = "1";
        let minNumber = "1";
        for (let i=0;i<ronunds;i++) {
            maxNumber += "0";
            if(i + 1 < ronunds) {
                minNumber += "0";
            }
        }
        return {
            min : Number(minNumber),
            max : Number(maxNumber)
        };
    }
    useEffect(() => {
        if (isLoading) {
            setRounds((value) => value + 1);
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
      }, [isLoading]);
    return (
        <NumberActPage
            delegations={{
                answer,
                progress,
                isLoading,
                setAnswer,
                randomNumber,
                handleSubmit,
            }}
        />
    );
}
export default NumberActPageContainer;
