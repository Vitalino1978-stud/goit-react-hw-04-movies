
import {Route, Switch} from "react-router-dom";
import AppBar from './components/AppBar';
import MoviesView from './views/MoviesView';
import MovieDetailsView from './views/MovieDetailsView'
import SearchView from "./views/SearchView";
import routes from './routes';

const App = () => {
	return (
	
		<div className="App">

			<AppBar />
			<Switch>
				<Route exact path={routes.movies} component={MoviesView} />
				<Route path={routes.search} component={SearchView} />
				<Route path={routes.movieDetails} component={MovieDetailsView }/>

			</Switch>
      
    </div>
  );
}

export default App;
