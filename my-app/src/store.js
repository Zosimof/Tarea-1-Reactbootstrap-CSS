import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./Reducers/goalsSlice";
import optionReducer from './Reducers/optionSlice';
import removeReducer from './Reducers/removeSlice';

export default configureStore({
    reducer:{
        goals: goalReducer,
        option: optionReducer,
        remove: removeReducer
    }
})