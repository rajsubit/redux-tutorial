import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component {
	render () {
		return (
			<div className="jumbotron">
				<h1>React and Redux Tutorial</h1>
				<p>React, React Router and Redux in ES6 for ultra-responsive webpages.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
		);
	}
}

export default HomePage;
