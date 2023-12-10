import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';


interface Movie {
    id: number;
    title: string;
    poster_path: string; 
  }
  
  const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Movie[]>([]);
  
    const handleSearch = async () => {
      const response = await fetch('/api/search?query=' + query);
      setResults(await response.json());
    }
  
    return (
      <div>
        <TextField 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
  
        <Grid container spacing={2}> 
          {results.map(movie => (
            <Grid key={movie.id} item xs={3}>
              <MovieCard movie={movie} /> 
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  
  export default Search;