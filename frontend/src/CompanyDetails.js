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
    let company =  await JoblyApi.getCompany(this.props.match.params.handle);
    
    this.setState(() => ({
      company: company,
      loading: false
    }));
  }

  // After page loads, this function is called and renders the entire page. 
  renderPage() {
    let jobs = this.state.company.jobs.map(job => {
      return <JobCard key={job.id} {...job} user={this.props.user}/>
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
      <div className="container">
        {this.state.loading === true ? "Loading..." : this.renderPage()}
      </div>
    );
  }
}

export default CompanyDetails;