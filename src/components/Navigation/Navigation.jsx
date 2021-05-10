import { NavLink } from "react-router-dom";
import routes from '../../routes';
import './Navigation.scss'

const Navigation = () => {
	return (
		<nav>
			<NavLink to={routes.movies}
				className="nav_link"
			  activeClassName="nav_link_active">
				Home</NavLink>
			<NavLink to={routes.search}
				className="nav_link"
			  activeClassName="nav_link_active">
				Movies</NavLink>
		</nav>
	 );
}
 
export default Navigation;