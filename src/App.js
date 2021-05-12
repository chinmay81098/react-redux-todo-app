import './assets/styles/App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import { setInitialState } from './store/actions';


function App() {
  const todos = useSelector(state => ({
    inProgress: state.todoReducer.inProgress,
    completed: state.todoReducer.completed
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      dispatch(setInitialState(todos));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks</h1>
        <AddTodo />
      </header>
      <ListTodo />
    </div>
  )
}

export default App;
