import React from 'react';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
import Search from './Search';

// TODO: RESET COMPANIES PAGE WHEN NAVBAR CLICKED

class Companies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      loading: true
    };

    this.searchCompanies = this.searchCompanies.bind(this);
  }

  // API returns an array of objects containing companies. [{company}, ...]
  async componentDidMount() {
    let companies = await JoblyApi.getAllCompanies();
    this.setState({
      companies,
      loading: false
    });
  }

  // Passing in a search term to API returns an array of objects. [{company}, ...]
  // Update state with only the returned items.
  async searchCompanies(searchTerm) {
    let searchedCompanies = await JoblyApi.searchCompanies(searchTerm)
    
    this.setState({
      companies: searchedCompanies
    });
  }

  render() {

    // Create a company card for each company 
    const cards = this.state.companies.map(company => {
      return <CompanyCard key={company.handle} {...company}  />
    });
    const cardResult = cards.length > 0 ? cards : "Sorry, no results were found!"

    return (
      <div className="container">
        <Search search={this.searchCompanies}/>
        {this.state.loading ? "Loading..." : cardResult}
      </div>
    );
  }
}

export default Companies;