import { types } from "../types"

const initialState = {
    checking : true,
};

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.authLogin :
            return {
                ...state,
                userInfo : action.payload,
                checking: false,
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false,
            }
        case types.authLogout :
            return {
                checking: false,
            }
        default:
            return state;
    };
};