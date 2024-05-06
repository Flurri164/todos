import { useSelector } from 'react-redux';
import './App.css'
import Todo from './components/Todo'
import Form from './components/Form'
function App() {
  let todos = useSelector((state) => state.todos_store.todos)
  return (
    <>
      <Form></Form>
      <div className='todos-center'>
      {
        todos.map(todo => (
          <Todo className='ccc' todo={todo} key={todo.id}/>
        ))
      }

      </div>
    </>
  );
}

export default App;
