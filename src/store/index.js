import thunk   from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer
} from "redux-persist";
import {
    compose,
    createStore, 
    combineReducers,
    applyMiddleware,
} from "redux";


import { uiReducer }    from "./Reducers/uiReducer";
import { authReducer } from "./Reducers/authReducer";
import { testReducer } from "./Reducers/testReducer";
import { noteReducers } from "./Reducers/noteReducer";

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth : authReducer,
    test : testReducer,
    ui   : uiReducer,
    note : noteReducers,
});

const persistConfig = {
    storage,
    key: "root",
    whitelist: ["auth", "ui", "note"],
}
   
export const persistedReducer   = persistReducer(persistConfig, reducers);

export const store = createStore(
    persistedReducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export const persistor = persistStore(store);