import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import JoblyApi from './JoblyApi';
 
class JobCard extends React.Component {
  constructor(props) {
    super(props);

    this.apply = this.apply.bind(this);
  }

  async apply() {
    await JoblyApi.applyForJob(this.props.id);
    this.props.update();
  }

  render() {
    const { title, salary, equity, state } = this.props;
    const status = state ? "Applied" : "Apply";
    const isDisabled = state ? true : false;

    return (
      <div>
        <Card bg="light" style= {{ width:'100%', margin: "1rem"}}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Salary: ${salary}</Card.Text>
            <Card.Text>Equity: {equity}</Card.Text>
            <Button onClick={this.apply} variant="outline-dark" disabled={isDisabled}>{status}</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default JobCard;