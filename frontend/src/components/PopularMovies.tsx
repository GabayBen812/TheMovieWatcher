import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material';
import MovieCard from './MovieCard';


interface Movie {
    id: number; 
    title: string;
    poster_path: string; 
  }
  
  const PopularMovies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('/api/popular-movies');
        const data = await response.json();
        setMovies(data);  
      }
      fetchData();
    }, []);
  
    return (
      <div>
        <Typography variant="h4">Popular Movies</Typography>
  
        <Grid container spacing={3}>
          {movies.map(movie => (
            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  
  export default PopularMovies;