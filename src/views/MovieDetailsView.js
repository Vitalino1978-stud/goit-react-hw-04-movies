import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Api from '../services/movies-api';
import InfoContainer from '../components/InfoContainer'
import routes from '../routes';
import './MovieDetailsView.scss'



const IMG_URL = 'https://image.tmdb.org/t/p/w500'

class MovieDetailsView extends Component {
	state = {
		movie: {},
		genreNames: "",
		cast: [],
		review: []

	}
	
	async componentDidMount() {
		const id = this.props.match.params.movieId;
		// console.log(id);
		const movie = await Api.fetchById(id);
		this.setState({ movie });
		this.setState({ genreNames: this.state.movie.genres.map(genre => (genre.name)).join(' ') });
		const cast = await Api.fetchCast(id)
		this.setState({ cast });
		const review = await Api.fetchReviews(id)
		this.setState({review})
		
	}

	handleGoBack = () => {
		const { history, location } = this.props;
		history.push(location?.state?.from || routes.movies) 
	}

	render() {
		const { title, poster_path, backdrop_path, id, vote_average, genres, overview } = this.state.movie;
		return (
			<>
				<div>
					<button type="button" onClick={this.handleGoBack}>Go back</button>
					<h1>this is details view</h1>
					
				<img className="movie_poster" src={`${IMG_URL}/${poster_path || backdrop_path}`} alt={title}/>
				<h2>{title}</h2>
				<p>User score: {vote_average * 10}%</p>
				<h3>Overview</h3>
				<p>{overview}</p>
				<h3>Genres</h3>
					{id && <p>{this.state.genreNames}</p>}
				</div>
				<div>

					{id && < Route path={this.props.match.path} render={props => {
						return (
							<InfoContainer {...props} cast={this.state.cast} review={ this.state.review}/>
						)
					}} />}
				</div>
				</>
		 );
	}
}
 
export default MovieDetailsView;