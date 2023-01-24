import React, {useState} from 'react'
import './CreateTodo.css'

function CreateTodo(props) {

  const [inputValue, setInputValue] = useState('')

  const submit = (e) => {
    e.preventDefault();
    if(props.todosLen < 10) {
      props.onAddTodo(inputValue);
      setInputValue('')
    } else {
      alert('Вы больше не можете добавить Todo!')
    }  
  } 

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={submit}>
        <input value={inputValue} onChange={handleChange} type="text" placeholder='Введите список дел'/>
        <button className='CreateTodo__btn'>Добавить</button>
    </form>
  )
}

export default CreateTodo 