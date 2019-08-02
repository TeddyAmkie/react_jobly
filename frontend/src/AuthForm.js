import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import JoblyApi from './JoblyApi';

class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      method: "login",
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
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

  async handleSubmit(evt) {
    evt.preventDefault();
    let token;

    if (this.state.method === "login") {
      let {username,password} = this.state;
      token = await JoblyApi.login({ username, password });
    }

    if (this.state.method === "signup") {
      let {username,password, first_name, last_name, email} = this.state
      token = await JoblyApi.register({username,password, first_name, last_name, email});
    }

    // If successfully login/register, set token in localstorage and redirect to homepage.
    localStorage.setItem("token", token);
    await this.props.getUser(token);
    this.props.history.push("/");
  };

  handleClick(evt) {
    evt.preventDefault();
    this.setState({
      method: evt.target.name
    })
  }

  render() {

    // Signup Form
    const signUp = (
      <div>
        <Form.Group>
          <Form.Label>First Name</Form.Label>              
          <Form.Control id="first_name"
                        name="first_name"
                        onChange={this.handleChange}
                        value={this.state.first_name} 
                        size="md" type="text" /> 
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>              
          <Form.Control id="last_name"
                        name="last_name"
                        onChange={this.handleChange}
                        value={this.state.last_name} 
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
      
      // Login / Signup Buttons
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

        {/* Form starts here */}

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

            {/* Show additional input fields if signup */}
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