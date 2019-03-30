import  React from 'react';
import jobUtils from './jobUtils';
import './JobItem.css';

const JobItem = (props) => {

  const { job, onClick } = props;
  return (
    <tr className="job-item" onClick={ onClick }>
       <td>{ job.role }</td>
       <td>{ job.company }</td>
       <td>{ job.location }</td>
       <td>{ jobUtils.formatCurrency(job.salary) }</td>
       <td>{ jobUtils.formatDate(job.submittedAt) }</td>
     </tr>
  );
}

export default JobItem;
