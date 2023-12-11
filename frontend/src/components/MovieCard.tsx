import { Card, CardMedia, CardHeader } from '@mui/material';
import '../cssfiles/moviecard.css';
import { Typography } from '@mui/material';

interface Movie {
  id: number;
  poster_path: string; 
  title: string;
}

interface Props {
  movie: Movie;
}

const makeSize = (movieTitle:string) => {
  if (movieTitle.length > 11) 
    return movieTitle.substring(0, 11) + '...';
  return movieTitle;
}

const MovieCard: React.FC<Props> = ({movie}) => {
  return (
    <Card className='cardMediaCss' sx={{ maxWidth: 200, margin: 1, backgroundColor: '#092635' }}>
      <CardHeader style={{ backgroundColor: '#1B4242', color: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        title={<Typography variant="h6" sx={{ fontSize: '1.5rem' }}>
        {makeSize(movie.title)}
      </Typography>}
        subheader={<Typography variant="h6" style={{ color: '#9EC8B9'}} sx={{ fontSize: '1rem' }}>
        Available for stream
      </Typography>}
      />
      <CardMedia onClick={() => {console.log(movie.title)}}
        component="img"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
    </Card>
  );
}

export default MovieCard;