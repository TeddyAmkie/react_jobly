import React from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

class CompanyDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: null,
      loading: true
    }

    this.renderPage = this.renderPage.bind(this);
  }

  async componentDidMount() {
    let company =  await JoblyApi.getCompanyInfo(this.props.match.params.handle);
    // console.log(company);
    // console.log(company.jobs)
    
    this.setState(() => ({
      company: company,
      loading: false
    }));
  }

  // After page loads, this function is called and renders the entire page. 
  renderPage() {
    let jobs = this.state.company.jobs.map(job => {
      return <JobCard key={job.id} jobData={job}/>
    });

    return (
      <div>
        <h5>{this.state.company.name}</h5>
        <p>{this.state.company.description}</p>
        { jobs }
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.loading === true ? "Loading..." : this.renderPage()}
      </div>
    );
  }
}

export default CompanyDetails;