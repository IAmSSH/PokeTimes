import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Buy some milk"},
      {id: 2, content: "Play mario kart"}
    ]
  }
  
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  }

  render() {
    return(
      <div className="todo-app">
        <h1 className="center">Todos</h1>
        <div className="container">
          <Todos todos={ this.state.todos } deleteTodo={this.deleteTodo}/>
        </div>
        <AddTodo addTodo={ this.addTodo }/>
      </div>
    );
  }
}

export default App;