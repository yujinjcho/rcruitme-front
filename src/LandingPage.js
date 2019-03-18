import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import './mainSection.css';

const LandingPage = () => {
  return (
    <div>
      <div className="main-section-container">
        <div className="main-image">
          <h1 className="main-header">Catchy Title</h1>
          <p className="main-description" >Catchy description that explains value proposition</p>
        </div>
      </div>
      <div>
        todo: description with bullets
      </div>
      <div>
        todo: generic footer
      </div>
    </div>
  );
}

export default LandingPage;
