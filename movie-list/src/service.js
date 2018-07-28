const MovieDB = require('moviedb')('400793f84a86d5d8303a86673e9ce035');

class MovieService {
	
	listGenres() {
		mdb.movieLists((err, res) => {
		  console.log(res);
		});
	}
}

export default MovieService;