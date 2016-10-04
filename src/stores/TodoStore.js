// objects and data

import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor(){
    super()
    this.todos = [
      {
        id: 1,
        text:"go shopping",
        complete: false
      },
      {
        id: 2,
        text:"pay water bills",
        complete: false
      }
    ]
  }

  // action TodoStore calls
  createTodo(text) {
    console.log("create todo called in stores")
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    })
    this.emit("change");
    console.log(this.todos, "todo data");
  }

  getAll() {
    return this.todos;
  }

  //triggers when dispatcher is called
  handleActions(action) {
    // check watch action is called
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text)
      }
      break;
      case "RECEIVE_TODOS": {
        this.todos= action.todos;
        this.emit("change");
      }
      break;
    }
    console.log("Received an action", action)
  }

}

const todoStore = new TodoStore;
// listener of dispatcher
dispatcher.register(todoStore.handleActions.bind(todoStore))
// expost dispatcher globally
window.dispatcher = dispatcher;

export default todoStore;
