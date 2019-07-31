import React from 'react';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
import Search from './Search';

// TODO: RESET COMPANIES PAGE WHEN NAVBAR CLICKED

class Companies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: []
    };
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  // API returns an array of objects containing companies. [{company}, ...]
  async componentDidMount() {
    let companiesList = await JoblyApi.getAllCompanies();

    this.setState(() => ({
      companies: companiesList
    }));
  }

  // Passing in a search term to API returns an array of objects. [{company}, ...]
  // Update state with only the returned items.
  async searchCompanies(searchTerm) {
    let searchedCompanies = await JoblyApi.searchCompanies(searchTerm)
    console.log(searchedCompanies);
    
    this.setState(() => ({
      companies: searchedCompanies
    }));
  }

  render() {

    // Display company cards for all companies in the state.
    let cards = this.state.companies.map(company => {
      return <CompanyCard key={company.handle}  companyData={company} />
    });

    return (
      <div>
        <Search search={this.searchCompanies}/>
        {this.state.companies.length > 0 ? cards : "Loading"}
      </div>
    );
  }
}

export default Companies;