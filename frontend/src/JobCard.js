import React from 'react';
import Card from 'react-bootstrap/Card';
 
class JobCard extends React.Component {
  render() {
    let job = this.props.jobData;

    return (
      <div>
        <Card bg="light" style= {{ width:'100%', margin: "1rem"}}>
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Text>Salary: ${job.salary}</Card.Text>
            <Card.Text>Equity: {job.equity}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default JobCard;