import React, { Component } from 'react';
import {Link} from "react-router";

import '../css/App.css';
// import logo from './logo.svg';
import Header from './Header.js';


//App is the root app
class App extends Component {
  constructor() {
    //must set super so App inhert state
    super();
    //set state
    this.state = {title: "Welcome"};
    //state has an internal value
    //props are injected
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    //react can only return 1 root element at a time, must be nested
    /*
    setTimeout(() => {
      this.setState({name: "Bob"});
    }, 1000)

    const title = "Welcome Back Commmander";
    */
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <h1>Hello World</h1>
        {this.props.children}
        <Link to="settings">settings</Link>
      </div>
    );
  }
}

export default App;

// data is passed in state and prop
