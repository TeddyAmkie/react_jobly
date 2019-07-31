import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="nav">
          <li className="m-1"><Link to="/">Home</Link></li>
          <li className="m-1"><Link to="/companies">Companies</Link></li>
          <li className="m-1"><Link to="/jobs">Jobs</Link></li>
          <li className="m-1"><Link to="/profile">Profile</Link></li>
          <li className="m-1"><Link to="/login">Login</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;