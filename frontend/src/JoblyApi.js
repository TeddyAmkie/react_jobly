import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001/";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem("token");

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
        // axios sends query string data via the "params" key,
        // and request body data via the "data" key,
        // so the key we need depends on the HTTP verb
    }

    catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Company API calls

  // Returns [{company}, ...]
  static async getAllCompanies() {
    let res = await this.request(`companies/`);
    
    return res.companies;
  }

  // Returns {handle, jobs[{job, ...}], name, num_employees, description, logo_url}
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);

    return res.company;
  }

  // Returns [{company}, ...]
  static async searchCompanies(searchTerm) {
    let res = await this.request(`companies/`, {search: searchTerm});

    return res.companies;
  }

  // Job API calls

  // Returns [{job}, ...]
  static async getAllJobs() {
    let res = await this.request('jobs/');
    
    return res.jobs;
  }

  // Returns [{job}, ...]
  static async searchJobs(searchTerm) {
    let res;
  
    // search for equity
    if (+searchTerm < 1) {
      res = await this.request(`jobs/`, {max_equity: +searchTerm});

      // search for salary
    } else if (+searchTerm > 1) {
      res = await this.request(`jobs/`, {min_salary: +searchTerm});

      // search for job titles
    } else {
      res = await this.request(`jobs/`, {search: searchTerm});
    }

    return res.jobs;
  }

  static async applyForJob(jobId) {
    let res = await this.request(`jobs/${jobId}/apply`, {}, "POST");

    return res.message;
  }

  // User / Authentication API calls

  // Register user, returns token
  static async register(formInput) {
    let res = await this.request(`users/`, {...formInput}, "POST");

    return res.token;
  }
  
  // Login user, returns token
  static async login(formInput) {
    let res = await this.request(`login/`, { ...formInput}, "POST");

    return res.token;
  }

  // Get user data { username, first_name, last_name, jobs[], photo_url }
  static async getUser(username) {
    let res = await this.request(`users/${username}`);

    return res.user;
  }

  static async updateUser(username, formInput) {
    let res = await this.request(`users/${username}`, {...formInput}, "PATCH")

    return res.user;
  }
}

export default JoblyApi;