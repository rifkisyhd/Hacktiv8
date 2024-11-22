import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY
export const getMovieList = async () => {
    const movie = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return movie.data.results
}

export const searchMovie = async (query) => {    
    const search = await axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
    return search.data
    
}