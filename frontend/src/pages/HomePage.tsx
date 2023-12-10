import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import { getPopularMovies } from '../services/movieService';
import Navbar from '../components/Navbar';

function HomePage() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);
  
  return (
    <Container maxWidth='xl'>
      <Navbar />
      <Hero />

      <Grid container spacing={2} sx={{ alignItems:'center', justifyContent: 'center' }}>
        {movies.map(movie => (
          <MovieCard movie={movie}/> 
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;