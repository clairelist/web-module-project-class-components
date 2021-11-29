//...once again, DATA AKA IMPORT section
//!'AKA' is DEPRECATED; use PSEUD instead!
import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

//! 'TODO' is currently reserved by a namespace; will be ommitted here.
//using 'needful' instead

//needful: shape of data, state (see in app class)
//keys in our data:: task, id, completed

const todos = [
{
    task: 'laundry',
    id: 1,
    completed: 0 //NOT an int! BOOL value!!
},
{
    task: 'dishes',
    id: 2,
    completed: 0
},
{
  task: 'clean room',
  id: 3,
  completed: 0
},
{
  task: 'do coding homework',
  id: 4,
  completed: 0
}
];


//LOGIC PSEUD FUNCTION section
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state={
      todos: todos
    }
  }

  //LOGIC
  handleToggle = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(task=>{
        return (!task.completed);
      })
    });
  }

  handleAddTask = (title) => {
    // const count = this.todos.id; //increase count on newly created task, such that we will have a unique id per each new task made!

   

    const newTask={
      task: title,
      id: Date.now,
      completed: 0 //not an int!
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask]
    });
  }

  handleToggleTask=(task)=>{
    this.setState({
      ...this.state,
      todos: this.state.todos.map(tsk => {
        if (tsk.id === task.id) {
          return {...tsk, completed: !tsk.completed}
        } else {
          return tsk;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h2>Your current TODOS are:</h2>
        {/* <TodoList />
         --needful build these out, add button onclick to below!*/}
       <TodoForm handleAddTask={this.handleAddTask}/>
      </div>
    );
  }
}

//RETURN PSEUD 'EXPORT' section
export default App;
