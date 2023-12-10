// services/movieService.ts
//import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/movies';

export const getPopularMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error; // Ensure the error is rethrown to be caught in the HomePage
    }
  };

// Add an empty export statement to make it a module
export {};
