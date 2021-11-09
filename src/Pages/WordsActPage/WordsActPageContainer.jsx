/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from "react-router";
import { useEffect, useState }      from "react";
import { useDispatch, useSelector } from "react-redux";

import WordsActPage     from "./WordsActPage.jsx";
import words            from "../../resources/Data/words";
import { saveInfoTest } from "../../store/Actions/authActions";


const WordsActPageContainer = () => {
    const history = useHistory();

    const { userInfo } = useSelector(state => state.auth);
    const dispatch     = useDispatch();

    const [ronunds, setRounds]              = useState(1);
    const [existingWords, setExistingWords] = useState([]);
    const [startGame, setStartGame]         = useState(false);
    const [newWords, setNewWords]           = useState(words);
    const [word, setWord]                   = useState({
        value : "",
        type  : "",
    });

    const validateAnswer = async(typeAnsware = "") => {
        const { type } = word;
        if (type !== typeAnsware) {
            dispatch(saveInfoTest("words", userInfo.uid, ronunds-1));
            history.replace(`/dashboard/gameover/words/${ronunds}`);
            return;
        }
        setRounds((prev) => prev + 1);
        getNextWord();
    };

    const getRandomNumber = (size = 0) => {
        return Math.floor(Math.random() * (size));
    };

    const getNextWord = () => {
        const randomType =  Math.floor(Math.random() * (100));
    
        if(randomType % 2 === 0) {
            const index = getRandomNumber(newWords.length - 1);
            const value = newWords[index];
            setWord({
                value : newWords[index],
                type  : "new", 
            });
    
            newWords.splice(index, 1);
            setNewWords(newWords);

            existingWords.push(value);
            setExistingWords(existingWords);
        } else {
            const index = getRandomNumber(existingWords.length - 1);

            setWord( {
                value : existingWords[index],
                type  : "repet", 
            });
        }
    }

    const firstRound = () => {
        const index = getRandomNumber(newWords.length);
        const value =  newWords[index]
        setWord({
            value : value,
            type  : "new", 
        });

        newWords.splice(index, 1);
        setNewWords(newWords);

        const arr = [value];
        setExistingWords(arr);
    }
    
    useEffect(() => {
        firstRound();
    }, []);

    return (
        <WordsActPage
            delegations={{
                word,
                ronunds,
                startGame,
                setStartGame,
                validateAnswer,
            }}
        />
    );
}
export default WordsActPageContainer;