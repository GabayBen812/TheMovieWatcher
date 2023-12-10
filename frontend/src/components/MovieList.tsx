// components/MovieList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  // Add other properties as needed
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        const data = response.data;
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movies || movies.length === 0) {
    return <div>No movies available.</div>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
