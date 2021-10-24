import { types } from "../types"

const initialState = {
    name  : "Nestor",
    age   : "24",
    sex   : "Masculino",
    token : "",
};

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.authLoading :
            return {
                ...state,
                userInfo : action.payload.userInfo,
            }
        default:
            return state;
    };
};