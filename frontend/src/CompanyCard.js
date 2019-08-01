import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
 
class CompanyCard extends React.Component {
  render() {
    let company = this.props.companyData;

    return (
      <div>
        <Link to={`companies/${company.handle}`}>
          <Card bg="light" style= {{ width:'100%', margin: "1rem"}}>
            <Card.Body>
              <Card.Title>{company.name}</Card.Title>
              <Card.Text>{company.description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    )
  }
}

export default CompanyCard;