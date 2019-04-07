import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import withUserValidation from './withUserValidation';
import jobUtils from './jobUtils';
import './JobDescription.css';

import getPath from './api';
import auth from './auth';

class JobDescription extends Component {
  state = {
    job: null
  };

  componentDidMount() {
    fetch(getPath(`/job/${this.props.match.params.jobId}`), { headers: auth.header() })
      .then(res => res.json())
      .then(data => this.setState({ job: data }));
  }

  render() {
    if (this.state.job) {
      const { role, company, location, salary, submittedAt} = this.state.job;
      return (
        <Container>
          <div className="job-description">

            <h3>
              Role
            </h3>
            <div className="job-field">
              {role}
            </div>

            <h3>
              Company
            </h3>
            <div className="job-field">
              {company}
            </div>

            <h3>
              Location
            </h3>
            <div className="job-field">
              {location}
            </div>

            <h3>
              Salary
            </h3>
            <div className="job-field">
              {jobUtils.formatCurrency(salary)}
            </div>

            <h3>
              Date
            </h3>
            <div className="job-field">
              {jobUtils.formatDate(submittedAt)}
            </div>

          </div>

        </Container>
      );

    } else {
      return <div>Job details are loading...</div>
    }
  }
}
export default withUserValidation(JobDescription);
