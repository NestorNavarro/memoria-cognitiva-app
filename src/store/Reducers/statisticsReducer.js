import { types } from "../types"

const initialState = {
   slr       : 0,
   chartData : [],
};

export const statisticsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.statisticsSLR :
            return {
               ...state,
               slr : action.payload.data,
            }
        case types.statisticsChart :
            return {
                ...state,
                chartData : action.payload.data,
            }
        default:
            return state;
    };
};