import React, { PropTypes } from 'react';

import '../../../server/static/css/header.css';

const Header = () => (
  <div className="header">
    <div className="logo"></div>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="head">
      <polygon fill="white" points="0,100 100,0 100,100"/>
    </svg>
  </div>
);

export default Header;