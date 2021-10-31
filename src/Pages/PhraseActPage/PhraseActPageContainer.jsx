import React, { useState }          from "react";
import { useDispatch, useSelector } from "react-redux";


import PhraseActPage   from "./PhraseActPage.jsx";
import phrases         from "../../resources/Data/phrases"
import { saveInfoTest } from "../../store/Actions/authActions";


const PharseActPageContainer = () => {
    const { userInfo } = useSelector(state => state.auth);
    const dispatch     = useDispatch();

    const newPhrase                             = phrases;
    const [ronunds, setRounds]                  = useState(1);
    const [answerOne, setAnswerOne]             = useState("");
    const [answerTwo, setAnswerTwo]             = useState("");
    const [isCorrect, setIsCorrect]             = useState(true);
    const [startGame, setStartGame]             = useState(false);
    const [randomNumber, setRandomNumber]       = useState(Math.floor(Math.random() * (0,20)));
    const [actualPhrase, setNewActualPhrase]    = useState(newPhrase[randomNumber]);

    const getRandomNumberByLevel = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(actualPhrase.answer_1 === answerOne.toString() && actualPhrase.answer_2 === answerTwo.toString()){
            setRounds((value) => value + 1);
        } else {
            setIsCorrect(false);
            dispatch(saveInfoTest("phrases" , userInfo.uid, ronunds-1));
            
        }

        setAnswerOne("");
        setAnswerTwo("");
        setRandomNumber(getRandomNumberByLevel(0,20));
        setNewActualPhrase(newPhrase[randomNumber]);
    }

    return (
        <PhraseActPage 
            delegations={{
                ronunds,
                answerOne,
                answerTwo,
                isCorrect,
                startGame,
                actualPhrase,
                setAnswerOne,
                setAnswerTwo,
                setStartGame,
                handleSubmit,
            }}
        />
    );
}

export default PharseActPageContainer;
