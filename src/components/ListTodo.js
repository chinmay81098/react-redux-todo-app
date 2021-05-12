import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

function ListTodo() {
  const todos = useSelector(state => ({
    inProgress: state.todoReducer.inProgress,
    completed: state.todoReducer.completed
  }));

  return (
    <section>
      <div className="task-list">
        <h3>To-Do</h3>
        {
          todos.inProgress.length > 0 &&
          todos.inProgress.map((item, idx) => <TodoItem key={item.id} item={item} pos={idx} completed={false} />)
        }
      </div>
      <div className="task-list">
        <h3>Completed</h3>
        {
          todos.completed.length > 0 &&
          todos.completed.map(item => <TodoItem key={item.id} item={item} completed={true} />)
        }
      </div>
    </section>
  );
}

export default ListTodo;