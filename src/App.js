import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component{

    state = {
        todos:[

        ]
    }

    deleteTodo = (id) =>{
        const todoList = this.state.todos.filter(todo =>{
            return todo.id !== id
        })
        this.setState({todos: todoList});
    }
    addTodo = (todo) =>{
        todo.id = Math.random();
        const todoList = [...this.state.todos, todo];
        this.setState({todos : todoList});
    }


  render(){
    return(
        <div className = 'todo-app container'>
            <h1 className='center blue-text'>Naman's Todos</h1>
            <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
            <AddTodo addTodo = {this.addTodo}/>
        </div>
    )
  }
}

export default App;













