import React, { useState } from 'react'
import TodoForm from './todoform'

;


const Todos = () => {
  const loadFromStorage = ()=>{
    const items = localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[];
return items;
  };
  const [todos, setTodos] = useState([...loadFromStorage()]);
  
 
  React.useEffect(() => {
    
  }, [todos]);


  const addTodo = title => {
    let newTodo = { title };
    // newTodo.id = Math.random() * 10000;
    newTodo.completed = false;
let _todos = [newTodo, ...todos];
    

    setTodos(_todos);
    saveToStorage(_todos);
   
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
  saveToStorage(temp);
  };

  const sortTodos = (_todos) => {
    _todos.sort((a, b) => a.completed - b.completed);

  }
  const clearTodos = e => {
    console.log('clear')
    setTodos([]);
    restLocalStorage();

  }

 
  const saveToStorage = (data)=>{
    localStorage.setItem('todos', JSON.stringify(data));;
  };
  const restLocalStorage = ()=>localStorage.removeItem('todos');

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
