import React from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyApi';
import Search from './Search';
 
class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      loading: true
    };
    this.searchJobs = this.searchJobs.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  // API returns an array of objects containing companies. [{company}, ...]
  async componentDidMount() {
    let jobsList = await JoblyApi.getAllJobs();

    this.setState(() => ({
      jobs: jobsList,
      loading: false
    }));
  }

  // Passing in a search term to API returns an array of objects. [{company}, ...]
  // Update state with only the returned items.
  async searchJobs(searchTerm) {
    let searchedJobs = await JoblyApi.searchJobs(searchTerm)
    
    this.setState(() => ({
      jobs: searchedJobs
    }));
  }

  renderPage() {
    // Create company cards for all companies in the state.
    let cards = this.state.jobs.map(job => {
      return <JobCard jobData={job}/>
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
        <Search search={this.searchJobs}/>
        {this.state.loading === true ? "Loading..." : this.renderPage()}
      </div>
    );
  }
}

export default Jobs;