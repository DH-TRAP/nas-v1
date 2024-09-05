// src/components/PageLayout.js
import React from 'react';
import './PageLayout.css';

const PageLayout = ({ title, children }) => {
  return (
    <div className="page-container">
      <h1>{title}</h1>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageLayout;