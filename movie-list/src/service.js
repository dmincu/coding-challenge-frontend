const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=400793f84a86d5d8303a86673e9ce035';
const IMAGE_BASE = 'http://image.tmdb.org/t/p/w185/';

class MovieService {

   static getGenres() {
   		let GET_GENRES = '/genre/movie/list';
		return API_BASE + GET_GENRES + API_KEY;
	}

	static listMovies() {
   		let GET_MOVIES = '/discover/movie';
		return API_BASE + GET_MOVIES + API_KEY;
	}

	static listTvShows() {
   		let GET_MOVIES = '/discover/tv';
		return fetch(API_BASE + GET_MOVIES + API_KEY)
			.then(res => {
				return res.json();
			})
			.then(data => {
				return data;
			});
	}

	static getMovieById(id) {
   		let GET_MOVIE_BY_ID = '/movie/' + id;
		return fetch(API_BASE + GET_MOVIE_BY_ID + API_KEY)
			.then(res => {
				return res.json();
			})
			.then(data => {
				return data;
			});
	}

	static getImage(imagePath) {
		return fetch(IMAGE_BASE + imagePath + API_KEY)
			.then(res => {
				return res.json();
			})
			.then(data => {
				return data;
			});
	}
}

export default MovieService;