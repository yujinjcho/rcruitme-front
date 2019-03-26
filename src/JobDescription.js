import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import withUserValidation from './withUserValidation';
import { createBrowserHistory } from 'history';
import jobUtils from './jobUtils';
import './JobDescription.css';

class JobDescription extends Component {

  render() {
    const history = createBrowserHistory();
    const job = history.location.state.job;
    return (
      <Container>
        <div className="job-description">

          <h3>
            Role
          </h3>
          <div className="job-field">
            {job.role}
          </div>

          <h3>
            Company
          </h3>
          <div className="job-field">
            {job.company}
          </div>

          <h3>
            Location
          </h3>
          <div className="job-field">
            {job.location}
          </div>

          <h3>
            Salary
          </h3>
          <div className="job-field">
            {jobUtils.formatCurrency(job.salary)}
          </div>

          <h3>
            Date
          </h3>
          <div className="job-field">
            {jobUtils.formatDate(job.submittedAt)}
          </div>

        </div>

      </Container>
    );
  }
}
export default withUserValidation(JobDescription);
