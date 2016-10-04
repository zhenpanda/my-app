import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Featured extends React.Component {
  // init when Feature is run
  constructor() {
    super();
    // grab the data
    // console.log("start loading the page")
    this.getTodos = this.getTodos.bind(this);
    // loading in the data
    this.state = {todos: TodoStore.getAll()}
    // console.log(this.state)
  }

  // loading in things the first time the componet is being loaded
  componentWillMount() {
    // component action on change
    TodoStore.on("change", this.getTodos)
  }
  // unmount the listener
  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos)
  }

  // grab all the data from store
  getTodos() {
    // console.log("grabing all data from store now...")
    this.setState({
      todos: TodoStore.getAll()
    })
    // console.log(this.state, "current state after getTodos", this)
  }

  // reload all data
  reloadTodos() {
    TodoActions.reloadTodos()
  }

  // create Todo buttons
  createTodoOne() {
    // console.log("createTodo called! passing in dummy data");
    // TodoActions.createTodo(Date.now())
    TodoActions.createTodo("Dummy Text 1");
  }
  createTodoTwo() {
    TodoActions.createTodo("Dummy Text 2");
  }
  createTodoThree() {
    TodoActions.createTodo("Dummy Text 3");
  }
  createTodoFour() {
    TodoActions.createTodo("Dummy Text 4");
  }

  // render html
  render() {
    // console.log(this.state, "current state", this)
    const { todos } = this.state;
    // console.log({ todos }, "current todos obj", this)

    // custom object to be render by DOM
    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });
    console.log(TodoComponents)
    const SingleComponentOne = TodoComponents[0];
    const SingleComponentTwo = TodoComponents[1];
    const SingleComponentThree = TodoComponents[2];

    return (
      <div>
        <button onClick={this.createTodoOne.bind(this)}>Create 1</button>
        <button onClick={this.createTodoTwo.bind(this)}>Create 2</button>
        <button onClick={this.createTodoThree.bind(this)}>Create 3</button>
        <button onClick={this.createTodoFour.bind(this)}>Create 4</button>

        <button onClick={this.reloadTodos.bind(this)}>Reload</button>
        <h1>Todos</h1>

        <ul>{TodoComponents}</ul>

        <div>{SingleComponentOne}</div>
        <div>{SingleComponentTwo}</div>
        <div>{SingleComponentThree}</div>

      </div>
    );
  }
}
