import React from 'react';

const Todo = props => {
  const handleClick = ()=> {
    props.handleToggleTask(props.task);
  }

  return (
    <div onClick={handleClick} className={`Task${props.task.completed ? ' COMPLETED' : ''}`}>
      <p>{props.task.name}</p>
    </div>
  );
};

export default Todo;