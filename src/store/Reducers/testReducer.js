import { types } from "../types"

const initialState = {
    cartsTest   : { average : 0, bestScore : 0 },
    numbersTest : { average : 0, bestScore : 0 },
    shapesTest  : { average : 0, bestScore : 0 },
    wordsTest   : { average : 0, bestScore : 0 },
    phrasesTest : { average : 0, bestScore : 0 },
};

export const testReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.saveData :
            return {
                ...state,
                [action.payload.test] : {
                    ...action.payload.data,
                },
            }
        default:
            return state;
    };
};