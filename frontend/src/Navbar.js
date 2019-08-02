import React from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const activeStyles = {
      fontWeight: "bold",
      color: "black"
    }

    const login = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4"><NavLink to="/login" activeStyle={ activeStyles }>Login</NavLink></li>
      </ul>
    );

    const logout = <li className="nav-item mr-4" onClick={this.props.handleLogout}><NavLink to="/">Log Out</NavLink></li>

    // Userlinks are only shown if a user exists in App state
    const userLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4"><NavLink to="/companies" activeStyle={ activeStyles }>Companies</NavLink></li>
        <li className="nav-item mr-4"><NavLink to="/jobs" activeStyle={ activeStyles }>Jobs</NavLink></li>
        <li className="nav-item mr-4"><NavLink to="/profile" activeStyle={ activeStyles }>Profile</NavLink></li>
        {this.props.user ? logout : null}
      </ul>
    );

    return (
      <div className="Navigation navbar navbar-expand-md" style={{borderBottom: "2px solid rgba(0,0,0,.125)", marginBottom: "50px" }}>
        <NavLink className="navbar-brand" style={{display: "inline-block"}}to="/">Jobly</NavLink>
        {this.props.user ? userLinks : login}
      </div>
    );
  }
}

export default Navbar;