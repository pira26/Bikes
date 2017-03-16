import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import Header from './Header.jsx';

const Dashboard = ({ secretData }) => (
	<div>
	  <Header />
    <Card className="container">
      <CardTitle
        title="Dashboard"
        subtitle="You should get access to this page only after authentication."
      />

      {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
    </Card>
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;