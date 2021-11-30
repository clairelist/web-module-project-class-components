//DATA PSEUD IMPORT section
import React from 'react';
import Todo from './Todo';


//LOGIC PSEUD FUNCTION section
const TodoList = (props) => {
    return(
        <div>
            {props.todos.map(todo => (
        <Todo handleToggle={props.handleToggle} key={todo.id} todo={todo} />
      ))}
        </div>
    )
}

//RETURN / RENDER SECTIONR
export default TodoList;