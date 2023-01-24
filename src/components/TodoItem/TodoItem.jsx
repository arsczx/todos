import React from 'react'
import { useState } from 'react';
import css from './TodoItem.module.css'

function TodoItem({ status, title, id, onStatusChange, onDelete, onEdit }) {

  const [isEdit, setIsEdit] = useState(false)
  const [inputValue, setInputValue] = useState(title)

  const handleChange = () => {
    onStatusChange(id)
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }

  const submit = (event) => {
    event.preventDefault();
    onEdit(inputValue, id)
    setIsEdit(false)
  }

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className={css.wrapper}>
      { isEdit ? (
          <form onSubmit={submit}>
            <input 
              className={css.inp__save} 
              value={inputValue} 
              onChange={handleInput} 
              type="text" 
            />
            <button className={css.button__save}>Сохранить</button>
          </form>
        ) : (
          <label>
            <input checked={status} onChange={handleChange} type="checkbox" />
            <p className={status ? css.compleat : ''}>{title}</p>
          </label> 
        )}

      <div>
        <button onClick={handleEdit} className={css.button}> Редактировать </button>
        <button onClick={handleDelete} className={`${css.button} ${css.button_del}`}> Удалить </button>
      </div>
    </div>
  )
}

export default TodoItem