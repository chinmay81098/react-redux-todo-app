import React from 'react'
import { useDispatch } from 'react-redux';
import { markTodo, deleteTodo, reorderTodo } from '../store/actions';
import deleteIcon from '../assets/images/add-gray.svg';


function TodoItem(props) {
  const dispatch = useDispatch();

  const moveToCompleted = todo => {
    dispatch(markTodo(todo));
  }
  const removeTodo = id => {
    dispatch(deleteTodo(id));
  }
  const changeTodoPosition = (source, destination) => {
    dispatch(reorderTodo({ source, destination }));
  }
  return (
    <div className="todo-item">
      {props.completed ?
        <p className="completed-task"> {props.item.text} </p>
        :
        <div>
          <p className="todo-task" onClick={() => moveToCompleted(props.item)}> {props.item.text} </p>
          <div className="reorder-controls">
              <span onClick={() => changeTodoPosition(props.pos, props.pos - 1)}>	&#8593;</span>
              <span onClick={() => changeTodoPosition(props.pos, props.pos + 1)}>	&#8595;</span>
          </div>
        </div>
      }
      <button onClick={() => { removeTodo(props.item.id) }}>
        <img src={deleteIcon} alt="delete" className="delete-icon" />
      </button>
    </div>
  )
}

export default TodoItem;