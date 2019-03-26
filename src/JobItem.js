import  React, { Component } from 'react';
import jobUtils from './jobUtils';
import './JobItem.css';

class JobItem extends Component {

  render() {
    const job = this.props.job;
    return (
      <tr className="job-item" onClick = {this.props.onClick}>
        <td>{job.role}</td>
        <td>{job.company}</td>
        <td>{job.location}</td>
        <td>{jobUtils.formatCurrency(job.salary)}</td>
        <td>{jobUtils.formatDate(job.submittedAt)}</td>
      </tr>
    );
  }
};

export default JobItem;
