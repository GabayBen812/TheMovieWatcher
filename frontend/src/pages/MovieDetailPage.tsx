import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails'; // Correct file extension
import React, { useEffect, useState } from 'react';
import RecommendedMovies from '../components/RecommendedMovies'; // Correct file extension

interface RouteParams {
  id: string;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/movies/${id}`);
        setMovie(await response.json());
      } catch (error) {
        console.error('Error fetching movie details:', error);
        // Handle error gracefully, e.g., set an error state
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {movie && (
        <>
          <MovieDetails movie={movie} />
          
          {/* Pass a single Movie object to RecommendedMovies */}
          <RecommendedMovies movies={[movie]} />
        </>
      )}
    </div>
  );
};

export default MovieDetailPage;
