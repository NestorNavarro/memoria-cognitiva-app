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
import { noteReducers } from "./Reducers/noteReducer";
// import { authReducers } from "../Reducers/authReducers";

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    // auth: authReducers,
    ui: uiReducer,
    note: noteReducers,
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