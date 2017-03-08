import React, { PropTypes } from 'react';

import '../../../server/static/css/header.css';

const Header = () => (
  <div className="head">
    <div className="header">
      <div className="logo"></div>
      <h1>Bike Store</h1>
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
        <circle fill="white" cx="0" cy="100" r="100" />
        <circle fill="white" cx="200" cy="100" r="100" />
      </svg>
  </div>
);

export default Header;