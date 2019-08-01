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
        <Route exact path="/companies/:handle" render={ routeProps => <CompanyDetails {...routeProps} token={this.props.token}  />} />
        <Route exact path="/companies" render={() => <Companies token={this.props.token} />} />
        <Route exact path="/jobs" render={() => <Jobs token={this.props.token} />} />
        <Route exact path="/profile" render={() => <Profile token={this.props.token} />} />
        <Route exact path="/login" render={() => <AuthForm />} />
        <Route exact path="/" render={() => <Home token={this.props.token} />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
