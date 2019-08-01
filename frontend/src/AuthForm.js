import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import JoblyApi from './JoblyApi';

class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      method: "login"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();
    
    this.setState({
      // TODO
    });
  };

  handleClick(evt) {
    evt.preventDefault();
    this.setState({
      method: evt.target.name
    })
  }

  render() {
    const signUp = (
      <div>
        <Form.Group>
          <Form.Label>First Name</Form.Label>              
          <Form.Control id="firstName"
                        name="firstName"
                        onChange={this.handleChange}
                        value={this.state.firstName} 
                        size="md" type="text" /> 
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>              
          <Form.Control id="lastName"
                        name="lastName"
                        onChange={this.handleChange}
                        value={this.state.lastName} 
                        size="md" type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>               
          <Form.Control id="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email} 
                        size="md" type="text" />
        </Form.Group>
      </div>
    );

    return (
      <div className="container" style={{ overflow:"auto"}} >
        <div className="d-flex justify-content-end">
          <Button name="login"
                  onClick={this.handleClick}
                  className={this.state.method === "login" ? "active" : ""}
                  variant="outline-dark" 
                  size="md"
                  >Login</Button>
          <Button name="signup"
                  onClick={this.handleClick}
                  className={this.state.method === "signup" ? "active" : ""}
                  variant="outline-dark" 
                  size="md"
                  >Sign Up</Button>
        </div>
        <div style={{ border: "2px solid rgba(0,0,0,.125)", borderRadius: "10px", padding: "10px", overflow: "auto" }}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control id="username"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.username} 
                            size="md" type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label> 
              <Form.Control id="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password} 
                            size="md" type="password" /> 
            </Form.Group>

            {this.state.method === "signup" ? signUp : null}
            
            <Button type="submit" 
                    variant="outline-dark" 
                    size="md"
                    style={{ float: "right"}}
                    >Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default AuthForm;