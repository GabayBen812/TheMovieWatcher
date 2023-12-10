import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Pagination from '@mui/material/Pagination';
import RecommendedMovies from '../components/RecommendedMovies';
import { getPopularMovies } from '../services/movieService'; // Assuming you have a function to fetch recommended movies

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

const SearchPage: React.FC = () => {
  const query = new URLSearchParams(window.location.search).get('query');
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        if (query) {
          // Assuming you have a function to fetch recommended movies based on the query
          const movies = await getPopularMovies();
          setRecommendedMovies(movies);
          console.log(query, movies)
        }
      } catch (error) {
        console.error('Error fetching recommended movies:', error);
        // Handle error gracefully, e.g., set an error state
      }
    };

    fetchRecommendedMovies();
  }, [query]);

  return (
    <div>
      <Search />
      <Pagination />
      <RecommendedMovies movies={recommendedMovies} />
    </div>
  );
};

export default SearchPage;
