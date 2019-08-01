import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.searchTerm);
    this.setState({
      searchTerm: ""
    });
  };

  render() {
    return (
      <div className="container">
        <Form inline onSubmit={this.handleSubmit}>
          <Form.Control className="flex-grow-1"
                        id="searchTerm"
                        name="searchTerm"
                        placeholder="Enter search term..."
                        onChange={this.handleChange}
                        value={this.state.searchTerm} 
                        size="md" type="text" /> 
          <Button type="submit" 
                  variant="outline-dark" 
                  size="md"
                  className="ml-2 "
                  >Search</Button>
        </Form>
      </div>
    );
  }
}

export default Search;