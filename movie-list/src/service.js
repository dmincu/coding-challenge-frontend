const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=400793f84a86d5d8303a86673e9ce035';
const IMAGE_BASE = 'http://image.tmdb.org/t/p/w185/';

class MovieService {

   static getGenres() {
   		let GET_GENRES = '/genre/movie/list';
		fetch(API_BASE + GET_GENRES + API_KEY)
			.then(res => {
				return res.json();
			})
			.then(data => {
				return data.genres.map((entry) => {return entry.name;});
			});
	}

	static listMovies() {
   		let GET_MOVIES = '/discover/movie';
		fetch(API_BASE + GET_MOVIES + API_KEY)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
			});
	}

	static listTvShows() {
   		let GET_MOVIES = '/discover/tv';
		fetch(API_BASE + GET_MOVIES + API_KEY)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
			});
	}

	static getMovieById(id) {
   		let GET_MOVIE_BY_ID = '/movie/' + id;
		fetch(API_BASE + GET_MOVIE_BY_ID + API_KEY)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
			});
	}

	static getImage(imagePath) {
		fetch(IMAGE_BASE + imagePath + API_KEY)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
			});
	}
}

export default MovieService;