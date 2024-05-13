import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./Reducers/goalsSlice";
import optionReducer from "./Reducers/optionSlice";
import todoReducer from "./Reducers/todoSlice";

export default configureStore({
    reducer:{
        goals: goalReducer,
        option: optionReducer,
        todos: todoReducer
    }
})