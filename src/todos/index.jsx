import React, { useState } from 'react'
import TodoForm from './todoform'

  ;


const Todos = () => {
  const loadFromLocalStorage = () => {
    const items = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    return items;
  };
  const [todos, setTodos] = useState([...loadFromLocalStorage()]);


  React.useEffect(() => {

  }, [todos]);


  const addTodo = title => {
    let newTodo = { title };
    newTodo.completed = false;
    let _todos = [newTodo, ...todos];


    setTodos(_todos);
    saveToLocalStorage(_todos);

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
    saveToLocalStorage(temp);
  };

  const sortTodos = (_todos) => {
    _todos.sort((a, b) => a.completed - b.completed);

  }
  const clearTodos = e => {
    console.log('clear')
    setTodos([]);
    restLocalStorage();

  }


  const saveToLocalStorage = (data) => {
    localStorage.setItem('todos', JSON.stringify(data));;
  };
  const restLocalStorage = () => localStorage.removeItem('todos');

  return (
    <div className='w3-container todos-container'>
      <div className=''>
        <div className='w3-container'>
          <TodoForm addTodo={addTodo} />
        </div>

        <div className='clear-tbn-container '>
          <button onClick={clearTodos} className=''>Clear</button>
        </div>

      </div>
      <h2>Todos here</h2>
      <div className=''>
        {
          todos.map((todo, i) =>
           <span onClick={() => toggleCompleted(i)} key={i}>
             <div style={{textDecoration:`${todo.completed?'line-through':'inherit'}`}}>{todo.title}  </div>
             </span>)
        }
      </div>
    </div>
  );
}

export default Todos;
