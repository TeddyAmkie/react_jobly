import React from 'react';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
import Search from './Search';

class Companies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: []
    };
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  async componentDidMount() {
    let companiesList = await JoblyApi.getAllCompanies();

    this.setState(() => ({
      companies: companiesList
    }));
  }

  async searchCompanies(searchTerm) {
    let searchedCompanies = await JoblyApi.searchCompanies(searchTerm)
    
    this.setState(() => ({
      companies: searchedCompanies
    }));
  }

  render() {
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