/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector }   from "react-redux";

import ShapesActPage   from "./ShapesActPage";
import { saveInfoTest } from "../../store/Actions/authActions";


const ShapesActPageContainer = () => {
    const history = useHistory();

    const { userInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const getRandomShape = () => {
        return Math.floor(Math.random() * (4 - 0));
    }
    
    const [answare, setAnsware]             = useState(0);
    const [shapeFocus, setShapeFocus]       = useState({});
    const [startGame, setStartGame]       = useState(false);
    const [isDisabled, setIsDisabled]       = useState(true);
    const [showSequence , setShowSequence]  = useState(true);
    const [sequenceStack, setSequenceStack] = useState([getRandomShape()]);

    const sequence = (shape) => {
        setSequenceStack([...sequenceStack, shape]);
    }

    const handleOnClick = ({ target }) => {
        const { id } = target;

        if(sequenceStack[answare] !== Number(id)) {
            setAnsware(0);
            setIsDisabled(true);
            dispatch(saveInfoTest("figures" , userInfo.uid, sequenceStack.length - 1));
            history.replace(`/dashboard/gameover/shapes/${sequenceStack.length}`);
            return;
        }
        const count = answare + 1;
        setAnsware(count);

        if(count === sequenceStack.length) {
            setAnsware(0);
            setIsDisabled(true);
            sequence(getRandomShape());
            setShowSequence(true);
            return;
        }
    }

    const timer = ms => new Promise(res => setTimeout(res, ms));

    const  sartShowSequence = async() => {
        for (let i = 0; i < sequenceStack.length; i++) {
            await timer(400);
            setShapeFocus({
                [sequenceStack[i]] : true,
            });
            await timer(600);
            setShapeFocus({});
        }
        setShapeFocus({});
        setIsDisabled(false);
        setShowSequence(false);
    }

    useEffect(() => {
        if(showSequence && startGame) {
            sartShowSequence();
        } 
    }, [startGame, showSequence]);

    return (
        <ShapesActPage
            delegations={{
                startGame,
                shapeFocus,
                isDisabled,
                setStartGame,
                sequenceStack,
                handleOnClick,
            }}
        />
    );
}
export default ShapesActPageContainer;
