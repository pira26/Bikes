import React, { PropTypes } from 'react';

import '../../../server/static/css/footer.css';

const Footer = () => (
  <div className="footer">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="foot">
      <polygon fill="white" points="100,50 100,0 0,50"/>
    </svg>
  </div>
);

export default Footer;