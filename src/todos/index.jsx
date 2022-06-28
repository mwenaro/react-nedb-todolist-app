import React, {useState} from 'react'

import TodoForm from './todoform'

function Todos() {
  const [todos, setTodos] = useState([
    {title: 'hello task 1'},
    {title:'hello task 3'}
  ]);

  React.useEffect(()=>{
    console.log(todos);
  },[todos]);
  const addTodo = title =>{
    let newTodo = {title};
   newTodo.completed = false;
    newTodo.dateCreated = new Date();
    newTodo.dateUpdated = new Date();

    setTodos([newTodo, ...todos]);
  }
    return (
      <div >
        <TodoForm addTodo = {addTodo} />
<h2>Todos here</h2>
        <div >
            {
                todos.map((todo, i)=>{
                    <span key ={i}
                    style= {{backgroundColor: 'black',color:'white'}}
                    >{todo.title} i </span>
                })
            }
        </div>
      </div>
    );
  }
  
  export default Todos;
  