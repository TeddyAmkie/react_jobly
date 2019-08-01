import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Navbar';
import Routes from './Routes';
import JoblyApi from './JoblyApi';

const jwt = require("jsonwebtoken");
const token = localStorage.getItem("token")

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }

    this.getUser = this.getUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async componentDidMount() {
    await this.getUser(token)
  }

  async getUser(token) {
    if (token) {
      let username = jwt.decode(token).username;
      let user = await JoblyApi.getUser(username);

      this.setState({ user });
    }
  }

  handleLogout() {
    localStorage.clear();
    this.setState({ user: null });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar user={this.state.user} handleLogout={this.handleLogout}/>
          <Routes getUser={this.getUser}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
