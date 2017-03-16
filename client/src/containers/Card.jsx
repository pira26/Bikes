import React from 'react';
import axios from 'axios';

import Auth from '../modules/Auth';

class Card extends React.Component {
	constructor () {
		super();
		this.state = {};
		this.getData();
}
	getData() {
		axios.get('http://localhost:8000/api/bike', {
			headers: {Authorization: `bearer ${Auth.getToken()}`}
		}).then((res) => {
			console.log('data:', res);
			this.setState({body: res.data}); 
		});
	}

	render() {
		if (!this.state.body) return <h1> </h1>
		return (
			<div>
				{ this.state.body.map(bike =>
					<div key={bike.name}>{bike.name}</div>
				)}
			</div>
		);
	}
}

export default Card;