//follow the logic of 'listform' here! 
import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            input: ''
        }
    }

    //changes handler!
    handleChanges = (event) => {
        this.setState({
            ...this.state,
            input: event.target.value
        })
    }

    //YES it really is taht easy -- don't overthink!

    //submit funcy
    handleSubmit = (event) =>{
        event.preventDefault();

        this.props.handleAddTask(this.state.input);
    }

    render(){
        return(
            <form>
                <input 
                onChange={this.handleChanges}
                type='text'
                name='task'
                />
            <button onClick={this.handleSubmit}>ADD a TASK!</button>
            </form>
        )
    }
}

export default TodoForm;