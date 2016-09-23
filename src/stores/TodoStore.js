// exports an object and data

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

  getAll() {
    return this.todos;
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false,
    })
    this.emit("change");
  }

  //triggers when dispatcher is called
  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text)
      }
      case "RECEIVE_TODOS": {
        this.todos= action.todos;
        this.emit("change")
      }
    }
    console.log("Received an action", action)
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispatcher;

export default todoStore;
