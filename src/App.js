import {useEffect, useState} from 'react'
import './App.css';
import Header from './components/Header/Header'
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoItem from './components/TodoItem/TodoItem';

function App() {
  
  const [isLoading, setLoading] = useState(true);
  const todosLocal = JSON.parse(localStorage.getItem('todos')) || []
  const [todos, setTodos] = useState(todosLocal)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (str) => {
    setTodos([...todos, {text: str, status: false, id: Date.now()}])
  };
  
  const statusChange = (id) => {
    const newArr = todos.map((item) => {
      if(item.id === id) {
        return {...item, status: !item.status}
      } 
      return item
    })
    setTodos(newArr)
  };

  const deleteTodo = (id) => {
    const newArr = todos.filter((item) => item.id !== id )
    setTodos(newArr)
  };

  const editTodo = (newText, id) => {
    const newArr = todos.map((item) => {
      if(item.id === id) {
        return {...item, text: newText}
      } 
      return item
    })
    setTodos(newArr)
  };

  if(isLoading) {
    return <div className='loader'>
      Загрузка...
    </div>
  }

  const result = todos.reduce((akk, item) => akk + item.status ,0)

  const newTodos = todos.map((item) => (

    <TodoItem
      key={item.id}
      title={item.text}
      status={item.status}
      onStatusChange={statusChange}
      id={item.id}
      onDelete={deleteTodo}
      onEdit={editTodo}
    />
  ));

  return (
    <div className="App">
      <Header todosLen={todos.length} compleateTodos={result}/>
      <CreateTodo onAddTodo={addTodo} todosLen={todos.length} />
      <div className='todo-list'>
        {newTodos.length ? newTodos : <h1 className='newTodos__title'>Добавьте задание</h1>}
      </div>
    </div>
  );
}

export default App;
