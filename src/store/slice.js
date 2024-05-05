import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
    name: 'todos',
    initialState: {todos:[]},
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        }
    }
})
export const {addTodo} = slice.actions
export default slice.reducer