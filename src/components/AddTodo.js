import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, sortTodo } from '../store/actions';


function AddTodo() {
  let [text, setText] = useState('');
  const dispatch = useDispatch();
  const maxCharacterAllowed = 20;

  let characterLimitReached = text.length > maxCharacterAllowed;

  const handleInputChange = e => {
    setText(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(e.target.textInput.value));
    setText('');
  }
  const sortTodoList = e => {
    dispatch(sortTodo());
  }
  return (
    <form className="Add-tasks" onSubmit={handleSubmit}>
      <div className="input-tasks">
        <input
          type="text"
          placeholder="Add a Task"
          name="textInput"
          required
          value={text}
          onChange={handleInputChange}
          className={characterLimitReached ? 'input-bar-error' : 'input-bar'}
        />
        <div className="placeholder-icon" />
        <div className="error-message-container">
          {characterLimitReached ? <p>Must be {maxCharacterAllowed} Characters or less</p> : ""}
        </div>
      </div>
      <button
        type="submit"
        disabled={text.trim().length === 0 || characterLimitReached}
        className={text.trim().length === 0 || characterLimitReached ? 'btn-disable' : ''}
      >
        Add
      </button>
      <button
        type="button"
        onClick={sortTodoList}
      >
        Sort
      </button>
    </form>
  );
}

export default AddTodo;