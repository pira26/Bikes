import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Bike = () => (
	<div>
	  <Header />
      <FloatingActionButton mini={true}>
      	<i className="fa fa-plus"></i>
      </FloatingActionButton>
	  <p>Welcome to the first private bike loan website ! </p>
	  <Footer />
	</div>
);

export default Bike;