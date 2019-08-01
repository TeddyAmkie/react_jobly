import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Navbar';
import Routes from './Routes';
import JoblyApi from './JoblyApi';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }

    this.getUser = this.getUser.bind(this);
  }

  async componentDidMount() {
    let user = await this.getUser(localStorage.getItem("token"))

    this.setState({ user });
  }

  async getUser(token) {
    let user = await JoblyApi.getUser(token);

    return user;
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar user={this.state.user}/>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
