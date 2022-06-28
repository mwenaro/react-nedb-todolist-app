import React, { useState } from 'react';

function TodoForm(props) {
  const [title, setTitle] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);

  }
  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleEnter = e => {
    e.preventDefault();

    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      props.addTodo(title);
      setTitle('');

    }

  }



  return (
    <form onSubmit={handleSubmit} className='w3-form todo-form'>
      <input  
      className= 'w3-input w3-round-4 '  
      placeholder = 'Add a todo ' 
      type="text" value={title} 
      onChange={handleChange} 
      onKeyUp={handleEnter} />

    </form>
  );
}

export default TodoForm;

