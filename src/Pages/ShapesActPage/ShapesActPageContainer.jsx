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
        setAuxSquenceStack([...sequenceStack.reverse()]);
    }

    const handleOnClick = ({ target }) => {
        console.log(auxSquenceStack);
        const { id } = target;
        const tempStack = auxSquenceStack;
        const shape     = tempStack.pop();

        if(shape !== Number(id)) {
            console.log("game over")
            setIsDisabled(true);
            return;
        }

        const count = answare + 1;
        setAnsware(count);
        setAuxSquenceStack([...tempStack]);

        if(count === sequenceStack.length) {
            setAnsware(0);
            setIsDisabled(true);
            sequence(getRandomShape());
            setShowSequence(true);
            return;
        }
    }
    


    useEffect(() => {
        if(showSequence) {
            if(auxSquenceStack.length > 0) {
                const timer = setInterval(() => {   
                    const tempStack = auxSquenceStack;
                    const shape     = tempStack.pop();
    
                    setAuxSquenceStack([...tempStack]);
                    setShapeFocus({
                        [shape] : true,
                    });
                }, 1000);
                return () => {
                    clearInterval(timer);
                }
            } else {
                setIsDisabled(false);
                setShowSequence(false);
                setAuxSquenceStack([...sequenceStack.reverse()]);
                return;
            }
        }
    }, [showSequence, auxSquenceStack, sequenceStack]);

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
