import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Companies from './Companies';
import Jobs from './Jobs';
import Profile from './Profile';
import Home from './Home';
import CompanyDetails from "./CompanyDetails";
import AuthForm from "./AuthForm";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/companies/:handle" render={ routeProps => <CompanyDetails {...routeProps} />} />
        <Route exact path="/companies" render={() => <Companies />} />
        <Route exact path="/jobs" render={() => <Jobs />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/login" render={() => <AuthForm />} />
        <Route exact path="/" render={() => <Home />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
