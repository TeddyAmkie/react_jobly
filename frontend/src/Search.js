import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ""
    };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  gatherInput = evt => {
    evt.preventDefault();
    this.props.search(this.state.searchTerm);
    this.setState({
      searchTerm: ""
    });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.gatherInput}>
          <label htmlFor="Search"></label>
          <input
            id="searchTerm"
            name="searchTerm"
            placeholder="Enter search term..."
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;