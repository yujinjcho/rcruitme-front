import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import withUserValidation from './withUserValidation';
import jobUtils from './jobUtils';
import './JobDescription.css';

import auth from './auth';

class JobDescription extends Component {
  state = {
    job: null
  };

  componentDidMount() {
    fetch(`/job/${this.props.match.params.jobId}`, { headers: auth.header() })
      .then(res => res.json())
      .then(data => this.setState({ job: data }));
  }

  render() {
    return (
      <Container>
        { this.state.job &&
          <div className="job-description">

            <h3>
              Role
            </h3>
            <div className="job-field">
              {this.state.job.role}
            </div>

            <h3>
              Company
            </h3>
            <div className="job-field">
              {this.state.job.company}
            </div>

            <h3>
              Location
            </h3>
            <div className="job-field">
              {this.state.job.location}
            </div>

            <h3>
              Salary
            </h3>
            <div className="job-field">
              {jobUtils.formatCurrency(this.state.job.salary)}
            </div>

            <h3>
              Date
            </h3>
            <div className="job-field">
              {jobUtils.formatDate(this.state.job.submittedAt)}
            </div>

          </div>
        }

      </Container>
    );
  }
}
export default withUserValidation(JobDescription);
