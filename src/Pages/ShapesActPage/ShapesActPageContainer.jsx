import React, { useEffect, useState } from "react";

import ShapesActPage from "./ShapesActPage";

const shapes = ["square", "circle", "retancle", "oval"];

const ShapesActPageContainer = () => {

    const getRandomShape = () => {
        return Math.floor(Math.random() * (4 - 0));
    }

    
    const [shapeFocus, setShapeFocus]       = useState({});
    const [answare, setAnsware]                  = useState(0);
    const [isDisabled, setIsDisabled]           = useState(true);
    const [showSequence , setShowSequence]      = useState(true);
    const [sequenceStack, setSequenceStack]     = useState([getRandomShape()]);
    const [auxSquenceStack, setAuxSquenceStack] = useState([...sequenceStack]);

    const sequence = (shape) => {
        setSequenceStack([...sequenceStack, shape]);
        setAuxSquenceStack([...sequenceStack]);
    }

    const handleOnClick = ({ target }) => {
        const { id } = target;

        if(sequenceStack[answare] !== Number(id)) {
            console.log("game over")
            setAnsware(0);
            setIsDisabled(true);
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
        if(showSequence) {
            sartShowSequence();
        } 
    }, [showSequence]);

    return (
        <ShapesActPage
            delegations={{
                shapeFocus,
                isDisabled,
                handleOnClick,
            }}
        />
    );
}
export default ShapesActPageContainer;
