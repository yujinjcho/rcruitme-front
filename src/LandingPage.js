import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import './mainSection.css';

const LandingPage = () => {
  return (
    <div className="main-section-container">
      <div className="main-image">
        <h1 className="main-header">Catchy Title</h1>
        <p className="main-description" >Catchy description that explains value proposition</p>
      </div>
    </div>
  );
}

export default LandingPage;
