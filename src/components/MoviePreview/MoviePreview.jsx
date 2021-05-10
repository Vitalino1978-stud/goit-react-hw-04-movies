const MoviePreview = ({title, name, poster_path}) => {
	return (
		<div>
			<img src="" alt="" />
			<h4>{ title || name}</h4>
		</div>
	 );
}
 
export default MoviePreview;