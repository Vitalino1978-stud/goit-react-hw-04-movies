import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import Api from '../services/movies-api'
import MovieList from '../components/MoviesList'
	 

class SearchView extends Component {
	state = {
		searchQuery: '',
		movies: [],
	}

	componentDidMount() {
		if (this.props.location?.state?.searchQuery) {
			this.setState({ searchQuery: this.props.location?.state?.searchQuery });
		}
		if (window.location.search) {
			const url = new URLSearchParams(window.location.search)
			this.setState({ searchQuery: url.get('query')  });
		}

	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchQuery !== this.state.searchQuery) {
			this.fetchMovies();
		}
	}
	
	onChangeQuery = query => {
		this.setState({ searchQuery: query });
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: `query=${query}`,
			state: {searchQuery: query},
		})
	}

	fetchMovies = async () => {

		const movies = await Api.searchMovies(this.state.searchQuery)
		this.setState({ movies}); 
	}

	render() { 
		return (
			<div>
				<h1>Search movies</h1>
				<SearchForm onSubmit={this.onChangeQuery} />
				<MovieList movies={ this.state.movies}/>
			</div>
		 );
	}
}
 
export default SearchView;