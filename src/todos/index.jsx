import React, { useState } from 'react'
import useData from '../database/data';
import TodoForm from './todoform'


const Todos = () => {
  const [todos, setTodos] = useState([]);
  const {getAll,del,insert, errs} = useData();

  React.useEffect(() => {
    console.log(todos)
    console({getAll, errs})

  }, [todos]);


  const addTodo = title => {
    let newTodo = { title };
    // newTodo.id = Math.random() * 10000;
    newTodo.completed = false;

    newTodo.dateUpdated = Date.now();

    setTodos([newTodo, ...todos]);
  }

  const toggleCompleted = index => {
    let temp = todos.map((el, i) => {
      if (i === index) {
        el.completed = !el.completed;

      }
      return el;
    });
    sortTodos(temp);
    setTodos(temp);
  };

  const sortTodos = (_todos) => {
    _todos.sort((a, b) => a.completed - b.completed);

  }
  const clearTodos = e => {
    console.log('clear')
    setTodos([]);
  }
  return (
    <div >
      <div>
        <TodoForm addTodo={addTodo} />
        <div className='clear-tbn-container'>
          <button  onClick={clearTodos}>Clear</button>
        </div>

      </div>
      <h2>Todos here</h2>
      <div>
        {
          todos.map((todo, i) => <span onClick={() => toggleCompleted(i)} key={i}> <div style={{}}>{todo.title} - {todo.completed ? 'completed' : 'not'} </div></span>)
        }
      </div>
    </div>
  );
}

export default Todos;
