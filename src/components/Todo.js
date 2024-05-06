import { useDispatch } from 'react-redux'
import './Todo.css'
import { toggleTodo, remove} from '../store/slice'
function Todo({todo}) {
    const dispatch = useDispatch()
    const toggleHandler = (id) => {
        dispatch(toggleTodo(id))
    }
    const removeHandler = (id) => {
        dispatch(remove(id))
    }
    return(
        <>
            <div className='todos-flex'>
                <div 
                className='complete buttons' 
                onClick={() => toggleHandler(todo.id)}>Complete</div>
                <div 
                    className={`${
                        todo.complete ? 'comp': ' '
                }`}>{todo.text}</div>
                <div 
                    className='Delete buttons' 
                    onClick={() => removeHandler(todo.id)}>Delete</div>
            </div>
        </>
    )
}
export default Todo