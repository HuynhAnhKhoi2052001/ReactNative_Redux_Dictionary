import { combineReducers, createStore } from "redux";
import reducer from "./reducer";

const rootReducer =combineReducers({
    dictionary:reducer,
})
const store =createStore(rootReducer)
export default store;