import React, { useState }          from "react";
import { useDispatch, useSelector } from "react-redux";


import PhraseActPage   from "./PhraseActPage.jsx";
import phrases         from "../../resources/Data/phrases"
import { saveInfoTest } from "../../store/Actions/authActions";
import { useHistory } from "react-router";


const PharseActPageContainer = () => {
    const history = useHistory();

    const { userInfo } = useSelector(state => state.auth);
    const dispatch     = useDispatch();

    const [newPhrase, setnNwPhrase]          = useState(phrases);
    const [ronunds, setRounds]               = useState(1);
    const [answerOne, setAnswerOne]          = useState("");
    const [answerTwo, setAnswerTwo]          = useState("");
    const [startGame, setStartGame]          = useState(false);
    const [randomNumber, setRandomNumber]    = useState(Math.floor(Math.random() * (0, phrases.length - 1)));
    const [actualPhrase, setNewActualPhrase] = useState(newPhrase[randomNumber]);

    const getRandomNumberByLevel = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const handleSubmit = (e) => {
        if(e?.preventDefault ) e.preventDefault();

        // const tempRound = ronunds;
        
        if(actualPhrase.answer_1 === answerOne.toString() && actualPhrase.answer_2 === answerTwo.toString()){
            setRounds(ronunds + 1);
        } else {
            history.replace(`/dashboard/gameover/phrase/${ronunds}`);
            dispatch(saveInfoTest("phrases" , userInfo.uid, ronunds-1));
            return;
        }
        const temp = [...newPhrase];
        temp.splice(randomNumber, 1);

        setnNwPhrase(temp);
        console.log(temp);

        setAnswerOne("");
        setAnswerTwo("");
        setRandomNumber(getRandomNumberByLevel(0, temp.length -1));
       
        setNewActualPhrase(temp[randomNumber]);
        if (temp.length === 0){ 
            history.replace(`/dashboard/gameover/phrase/${ronunds + 1}`);
            dispatch(saveInfoTest("phrases" , userInfo.uid, ronunds));
            return;
        }
    }

    return (
        <PhraseActPage 
            delegations={{
                ronunds,
                answerOne,
                answerTwo,
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
