import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import Cast from '../Cast';
import Review from '../Review';






class InfoContainer extends Component {
	state = {
		pathState: {},
	}
	
	componentDidMount() {
		this.setState({ pathState: this.props.location?.state });
	}

	render() {
		const {match, cast, review} = this.props
		
		return (
			<>
				<h3>Additional information</h3>
				<ul>
					<li>
						<NavLink to={{pathname: `${match.url}/cast`, state: {from: this.state.pathState.from}}}>Cast</NavLink>
					</li>
					<li>
						<NavLink to={{
							pathname: `${match.url}/review`, state: { from: this.state.pathState.from }
						}}>Reviews</NavLink> </li>
				</ul>
				<div>
					{cast && < Route path={`${match.url}/cast`} render={
						() => {
							return <Cast cast={cast} />
						}
					} />}
					{review && < Route path={`${match.url}/review`} render={
						() => {
							return <Review review={review} />
						}
					} />}
				</div>
				</>
		 );
	};
};
 
export default InfoContainer;



