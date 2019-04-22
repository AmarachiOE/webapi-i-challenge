import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import UsersList from "./components/UsersList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  // GET data
  componentDidMount() {
    axios.get("http://localhost:5000/api/users").then(res => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;
