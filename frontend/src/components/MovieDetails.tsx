import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

interface Movie {
  id: number;
  title: string; 
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

interface Video {
  id: string; 
  key: string; 
  site: string;
} 

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const [videos, setVideos] = useState<Video[]>([]); 
  
  useEffect(() => {
    async function fetchVideos() {
      const response = await fetch(`/api/videos/${movie.id}`);
      setVideos(await response.json());
    }

    fetchVideos();
  }, [movie.id]);

  const video = videos[0];
  
  if (!video) return null;
  
  const videoUrl = `https://www.youtube.com/watch?v=${video.key}`;
  

  return (
    <Grid container gap={4}>
      <Grid item xs={12} sm={4}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </Grid>

      <Grid item xs={12} sm={8}>
        <Typography variant="h2">{movie.title}</Typography>

        <ReactPlayer url={videoUrl} width="100%" />

        <Typography variant="h5">Overview</Typography>

        <Typography>{movie.overview}</Typography>
      </Grid>
    </Grid>
  );
}

export default MovieDetails;