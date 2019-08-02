import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import JoblyApi from './JoblyApi';
 
class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      photo_url: "",
      password: ""
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
    try {
      evt.preventDefault();
      await JoblyApi.updateUser(this.props.user.username, {...this.state});
      await this.props.getUser(localStorage.getItem("token"));
    } catch(err) {
      // TODO: SHOW MESSAGE IF EMPTY INPUTS / Auto populate empty inputs
    }
  }

  handleClick(evt) {
    evt.preventDefault();
    this.setState({
      method: evt.target.name
    })
  }

  render() {
    return (
      <div className="container" style={{ overflow:"auto"}}>
        <div style={{ border: "2px solid rgba(0,0,0,.125)", borderRadius: "10px", padding: "10px", overflow: "auto" }}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>              
              <p>{this.props.user.username}</p>
            </Form.Group>
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
            <Form.Group>
              <Form.Label>Photo URL</Form.Label>               
              <Form.Control id="photo_url"
                            name="photo_url"
                            onChange={this.handleChange}
                            value={this.state.photo_url} 
                            size="md" type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Re-enter Password</Form.Label> 
              <Form.Control id="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password} 
                            size="md" type="password" /> 
            </Form.Group>
            <Button type="submit" 
                    variant="outline-dark" 
                    size="md"
                    style={{ float: "right"}}
                    >Save Changes
            </Button>
          </Form>
        </div>
      </div>
      )
    }
  }


export default Profile;