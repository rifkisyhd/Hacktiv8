import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieList = async () => {
    const response = await axios.get(`${BASE_URL}?s=movie&apikey=${API_KEY}`);
    return response.data.Search; 
}

export const searchMovie = async (query) => {
    const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
    return response.data; 
}