import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import UsersList from "./components/UsersList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  };

   // GET data -- GET REQUEST
   componentDidMount() {
    // visit http://localhost:5000/friends to look at data being requested
    axios.get("http://localhost:5000/api/users")
      .then(res => {
        console.log(res.data);
        this.setState({ users: res.data });
      });
  };


  render() {
    return (
      <div className="App">
        <p>Inside App</p>
        <UsersList users={this.state.users}/>
      </div>
    );
  }
  
}

export default App;
