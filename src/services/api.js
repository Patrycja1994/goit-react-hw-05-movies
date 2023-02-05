import axios from 'axios';

const KEY_API = 'eb7c9132ba6734f59534fa5b6e14e667';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
    const response = await axios.get('trending/movie/day?api_key=${KEY_API}');
    return response.data.results;
};

export const fetchByQuery = async query => {
    const response = await axios.get('search/movie?api_key=${KEY_API}&language=en-US&page=1&include_adult=false&query=${query}');
    return response.data.results;
};

export const fetchById = async movieId => {
    const response = await axios.get('movie/${movie_id}?api_key=${KEY_API}&language=en-US');
    return response.data;
};

export const fetchMovieActor = async movieId => {
    const response = await axios.get('movie/${movie_id}/credits?api_key=${KEY_API}&language=en-US')
    return response.data;
};

export const fetchMovieReviews = async movieId => {
    const response = await axios.get('movie/${movie_id}/reviews?api_key=${KEY_API}&language=en-US&page=1')
    return response.data;
};
