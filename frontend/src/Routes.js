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
    const login = <Route exact path="/login" 
                         render={routeProps => <AuthForm {...routeProps} getUser={this.props.getUser} />}
                         />
    const logout = <Route exact path="/" render={() => <Home user={this.props.user} />} />


    return (
      
      // If a route requires authentication, check for a user in App state.
      <Switch>
        <Route exact path="/companies/:handle" render={ routeProps => this.props.user ? <CompanyDetails {...routeProps} /> : <Redirect to='/login' />} />
        <Route exact path="/companies" render={() => this.props.user ? <Companies /> : <Redirect to='/login' />} />
        <Route exact path="/jobs" render={() => this.props.user ?  <Jobs /> : <Redirect to='/login' /> } />
        <Route exact path="/profile" render={() => this.props.user ?  <Profile user={this.props.user} getUser={this.props.getUser} /> : <Redirect to='/login' />} />
        {this.props.user ? logout : login}
        <Route exact path="/" render={() => <Home user={this.props.user}/>} />
        <Redirect to="/" user={this.props.user} />
      </Switch>
    );
  }
}

export default Routes;
