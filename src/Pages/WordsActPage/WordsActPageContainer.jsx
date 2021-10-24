import { useEffect, useState } from "react";
import WordsActPage            from "./WordsActPage.jsx";

import words  from "../../resources/Data/words";

const WordsActPageContainer = () => {
    const [ronunds, setRounds]              = useState(1);
    const [existingWords, setExistingWords] = useState([]);
    const [isCorrect, setIsCorrect]         = useState(true);
    const [newWords, setNewWords]           = useState(words);
    const [word, setWord]                   = useState({
        value : "",
        type  : "",
    });

    const validateAnswer = (typeAnsware = "") => {
        const { type } = word;
        console.log(existingWords);
        if (type !== typeAnsware) {
            setIsCorrect(false);
            console.log("gameover");
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
            setWord({
                value : newWords[index],
                type  : "new", 
            });
    
            newWords.splice(index, 1);
            setNewWords(newWords);

            existingWords.push(word.value);
            setExistingWords(existingWords);
        } else {
            console.log("repet");
            const index = getRandomNumber(existingWords.length - 1);

            console.log(existingWords[index]);
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
                isCorrect,
                validateAnswer,
            }}
        />
    );
}
export default WordsActPageContainer;