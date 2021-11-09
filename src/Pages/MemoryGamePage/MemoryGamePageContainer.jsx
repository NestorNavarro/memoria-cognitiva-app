/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector }   from "react-redux";

import MemoryGamePage      from './MemoryGamePage.jsx';
import { saveInfoTest } from "../../store/Actions/authActions.js";
import { useHistory } from "react-router";

const MemoryGamePageContainer = () => {
    const history = useHistory();

    const { userInfo } = useSelector(state => state.auth)
    const dispatch     = useDispatch();

    const [attemps, setAttemps]                         = useState(1);
    const [accerts, setAccerts]                         = useState(1);
    const [startGame, setStartGame]                     = useState(false);
    const [animating, setAnimating]                     = useState(false);
    const [selectedMemoBlock, setSelectedMemoblock]     = useState(null);
    const [shuffeldMemoBlocks, setShuffledMemoBlocks]   = useState([]);
    const emojiList = [...'🔵🟩🔶🔺✔🟡⬛◼'];

    useEffect ( () => {
            const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);

            setShuffledMemoBlocks(shuffledEmojiList.map( (emoji, i) => ({
                index: i,
                emoji,
                flipped: true
            }) ));

            setTimeout(() => {
                setShuffledMemoBlocks(shuffledEmojiList.map( (emoji, i) => ({
                    index: i,
                    emoji,
                    flipped: false
                }) ));
            }, 1000);

    }, [startGame]);

    const shuffleArray = a =>{
        for(let i = a.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    const handleMemoClick = memoBlock =>{
        const flippedMemoBlock = {...memoBlock, flipped: true};
        let shuffledMemoBlocksCopy = [...shuffeldMemoBlocks];
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);

        if(selectedMemoBlock == null) {
            setSelectedMemoblock(memoBlock);
        } else if(selectedMemoBlock.emoji === memoBlock.emoji){
            setSelectedMemoblock(null);
            setAccerts(accerts + 1);
            if(accerts === emojiList.length) {
                history.replace(`/dashboard/gameover/memory_game/${attemps}`);
                dispatch( saveInfoTest("cards" , userInfo.uid, attemps-1) );
               
            }
        } else {
            setAttemps(attemps + 1);
            setAnimating(true);
            setTimeout(() => {
                shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
                shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
                setShuffledMemoBlocks(shuffledMemoBlocksCopy);
                setSelectedMemoblock(null);
                setAnimating(false);
            }, 1000);
        }

    }

    return (
        <MemoryGamePage 
            delegations={{
                attemps,
                animating,
                startGame,
                setStartGame,
                handleMemoClick,
                shuffeldMemoBlocks
            }}
        />
    );
}
export default MemoryGamePageContainer;
