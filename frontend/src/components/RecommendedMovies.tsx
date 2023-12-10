import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MovieCard from './MovieCard';

interface Movie {
    id: number;
    title: string;
    poster_path: string; 
  }

interface RecommendedMoviesProps {
  movies?: Movie[]; // Use an array of Movie
}
  
interface Props {
  movie: Movie;
}
  
  const RecommendedMovies: React.FC<RecommendedMoviesProps> = ({ movies = [] }) => {
    /*const [recommendations, setRecommendations] = useState<Movie[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`/api/recommendations/${movie.id}`);
        setRecommendations(await response.json());  
      }
      fetchData();
    }, [movie.id]);
  
    return (
      <div>
        <Typography variant="h4">Recommended For You</Typography>
        
        <Grid container spacing={2}>
          {recommendations.map(rec => (
            <MovieCard key={rec.id} movie={rec} /> 
          ))}
        </Grid>
      </div>
    );
  };*/
  return (
    <div>
      {/* Map over the array of movies and render them */}
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          {/* Add other movie details as needed */}
        </div>
      ))}
    </div>
  );
};
  
  export default RecommendedMovies;