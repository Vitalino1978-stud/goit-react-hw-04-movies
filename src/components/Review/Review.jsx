
const IMG_URL = 'https://image.tmdb.org/t/p/w200'
const Review = ({review}) => {

	return (
		<ul>
			{review.map(({ author, id, content }) => (
				<li key={id}>
					<p>Author: {author}</p>
					<p>{content}</p>
						
				</li>
			))}
		</ul>
	 );
}
 
export default Review;
