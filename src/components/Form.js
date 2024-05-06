import '../components/Form.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { addTodo } from '../store/slice'
function Form() {
    const dispatch = useDispatch()
    const [todoText, setTodoText] = useState('')
    const handler = () => {
        const todo = {
            id: v4(),
            text: todoText,
            complete: false,
        }
        dispatch(addTodo(todo))
        setTodoText('')

    }
    return(
        <>
            <div className="form">
                <h1>From below will be your todos ...</h1>
                <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
                <button onClick={handler}>Add todo</button>
            </div>
        </>
    )
}
export default Form