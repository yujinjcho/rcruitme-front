import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import getPath from './api';
import auth from './auth';
import jobUtils from './jobUtils';
import JobItem from './JobItem';

class JobList extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    fetch(getPath('/jobs'), { headers: auth.header() })
      .then(res => res.json())
      .then(data => this.setState({jobs: data}));
  }

  handleJobDetail = (job) => () => {
    const url = `/job/${job.id}`;
    this.props.history.push(url, {job: job});
  }

  render() {
    const headers = ['Title', 'Company', 'Location', 'Salary', 'Date'];
    return (
      <table className="table">
        <thead>
          <tr>
            { headers.map(header => <th key={header}>{header}</th>) }
          </tr>
        </thead>
        <tbody>
          { this.state.jobs.sort(jobUtils.dateSorter).map(job => (
            <JobItem key={job.id} job={job} onClick={this.handleJobDetail(job)} />
          )) }
        </tbody>
      </table>
    );
  }
}

export default withRouter(JobList);
