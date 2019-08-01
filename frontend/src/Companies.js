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
    this.renderPage = this.renderPage.bind(this);
  }

  // API returns an array of objects containing companies. [{company}, ...]
  async componentDidMount() {
    let companiesList = await JoblyApi.getAllCompanies();

    this.setState(() => ({
      companies: companiesList,
      loading: false
    }));
  }

  // Passing in a search term to API returns an array of objects. [{company}, ...]
  // Update state with only the returned items.
  async searchCompanies(searchTerm) {
    let searchedCompanies = await JoblyApi.searchCompanies(searchTerm)
    
    this.setState(() => ({
      companies: searchedCompanies
    }));
  }

  // After page loads, this function is called and renders the entire page. 
  renderPage() {
    // Display company cards for all companies in the state.
    let cards = this.state.companies.map(company => {
      return <CompanyCard key={company.handle}  companyData={company} />
    });

    return (
      <div>
        {cards.length > 0 ? cards : "Sorry, no results were found!"}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Search search={this.searchCompanies}/>
        {this.state.loading === true ? "Loading..." : this.renderPage()}
      </div>
    );
  }
}

export default Companies;