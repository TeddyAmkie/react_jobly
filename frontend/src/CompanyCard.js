import React from 'react';

class CompanyCard extends React.Component {
  render() {
    let company = this.props.companyData;

    return (
      <div>
        <h5>{company.name}</h5>
        <p>{company.description}</p>
      </div>
    )
  }
}

export default CompanyCard;