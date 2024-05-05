import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../store/slice'
export const store = configureStore({
    reducer: {
        todos_store: TodoReducer,
    }
})