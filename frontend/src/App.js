import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Companies from './Companies';
// import Jobs from './Jobs';
// import Profile from './Profile';
// import Home from './Home';
// import NavBar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/companies/:handle" render={() => <Companies />} />
          <Route exact path="/companies" render={() => <Companies />} />
          {/* <Route exact path="/jobs" render={() => <Jobs />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/" render={() => <Home />} /> */}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
