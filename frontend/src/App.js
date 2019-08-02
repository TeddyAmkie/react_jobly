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
      user: null,
      loading: true
    }

    this.getUser = this.getUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async componentDidMount() {
    await this.getUser(token);

    this.setState({ loading: false })
  }

  async getUser(token) {
    try {
      if (token) {
        let username = jwt.decode(token).username;
        let user = await JoblyApi.getUser(username);
  
        this.setState({ user });
      }
    } catch(err) {
      // Redirects to login page 
    }
  }

  handleLogout() {
    localStorage.clear();
    this.setState({ user: null });
  }

  render() {
    const loading = "Loading...";
    const renderApp = (
      <BrowserRouter>
        <Navbar user={this.state.user} handleLogout={this.handleLogout}/>
        <Routes user={this.state.user} getUser={this.getUser} />
      </BrowserRouter>
    );

    return (
      <div className="App">
        {this.state.loading ? loading : renderApp}
      </div>
    );
  }
}

export default App;
