import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>

      <div className="main-section-container">
        <div className="main-image">
          <h1 className="main-header">Rcruitme</h1>
          <p className="main-description" >Manage and track your career opportunities</p>
        </div>
      </div>

      <Container>
        <div className="description-section-container">
          <h3 className="description-title">Track Opportunities</h3>
          <p>Keep track of job positions in a centralized location</p>

          <h3 className="description-title">Market Intelligence</h3>
          <p>Learn about different companies in your area and salary ranges</p>

          <h3 className="description-title">Relationships</h3>
          <p>Build a network of recruiters who can help you when want to consider new opportunities</p>
        </div>
      </ Container>

      <div className="footer">
        Rcruitme
      </div>


    </div>
  );
}

export default LandingPage;
