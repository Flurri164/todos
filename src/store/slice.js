import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
    name: 'todos',
    initialState: {todos:[]},
    reducers: {
        addTodo: (state, action) => {
            if(action.payload.text !== ''){

                state.todos.push(action.payload)
            }
        },
        toggleTodo: (state, action) => {
            const toggle = state.todos.find((todo) => todo.id ===action.payload)
            toggle.complete = !toggle.complete
        },
        remove: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})
export const {addTodo, toggleTodo, remove} = slice.actions
export default slice.reducer