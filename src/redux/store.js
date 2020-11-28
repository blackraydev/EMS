import { combineReducers, createStore } from "redux";
import { cardReducer } from "./cardReducer";
import { editReducer } from "./editReducer";

const rootReducer = combineReducers({ cards: cardReducer, edit: editReducer });
export const store = createStore(rootReducer);