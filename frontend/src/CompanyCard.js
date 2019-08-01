import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
 
class CompanyCard extends React.Component {
  render() {
    let {handle, name, description} = this.props;

    return (
      <div>
        <Link to={`companies/${handle}`}>
          <Card bg="light" style= {{ width:'100%', margin: "1rem", color: 'black'}}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    )
  }
}

export default CompanyCard;