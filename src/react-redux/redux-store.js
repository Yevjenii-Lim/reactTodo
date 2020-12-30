import { combineReducers, createStore } from "redux";
import TodoReducer from "./addTodoReducer";


let reducers = combineReducers({
    TodoReducer: TodoReducer,
})

let store = createStore(reducers)


export default store