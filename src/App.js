import { useSelector } from 'react-redux';
import Todo from './components/Todo'
import Form from './components/Form'
function App() {
  let todos = useSelector((state) => state.todos_store.todos)
  return (
    <>
      <Form></Form>
      {
        todos.map(todo => (
            <Todo todo={todo} key={todo.id}/>
        ))
      }
    </>
  );
}

export default App;
