import { combineReducers, createStore } from "redux";
import { usersReducer } from "./usersReducer";

let rootReducer = combineReducers({
  users: usersReducer,
});

//const persistedState = localStorage.getItem('reduxState')?JSON.parse(localStorage.getItem('reduxState')):[]

export const store = createStore(rootReducer);

//store.subscribe(()=>{localStorage.setItem('reduxState', JSON.stringify(store.getState()))})
