import React from 'react';
 
class Home extends React.Component {
  render() {
    const message = <h1>Welcome Back!</h1>

    return (
      <div className="container text-center">
        <h1>Jobly</h1>
        <p> All the jobs in one, convenient place.</p>
        {this.props.user ? message : null}
      </div>
    )
  }
}

export default Home;