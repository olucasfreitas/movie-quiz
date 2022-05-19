import axios from "axios";

export const API_KEY = "24ca0ea3";
export const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

export const api = axios.create({
  baseURL: API_URL,
});

export const getMovies = async (title: string) => {
  try {
    return await api.get(`${API_URL}&s=${title}`);
  } catch (error) {
    throw new Error("deu bug =~~~~~");
  }
};
