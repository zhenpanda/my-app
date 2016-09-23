import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    // loading in the data
    this.state = {todos: TodoStore.getAll()}
  }

  // loading in things the first time the componet is being loaded
  componentWillMount() {
    TodoStore.on("change", this.getTodos)
  }
  // unmount the listener
  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos)
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    })
  }

  createTodo() {
      TodoActions.createTodo(Date.now())
  }

  reloadTodos() {
    TodoActions.reloadTodos()
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>Create</button>
        <button onClick={this.reloadTodos.bind(this)}>Reload</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
