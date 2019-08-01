import React from 'react';
import Card from 'react-bootstrap/Card';
 
class JobCard extends React.Component {
  render() {
    let { title, salary, equity } = this.props;

    return (
      <div>
        <Card bg="light" style= {{ width:'100%', margin: "1rem"}}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Salary: ${salary}</Card.Text>
            <Card.Text>Equity: {equity}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default JobCard;