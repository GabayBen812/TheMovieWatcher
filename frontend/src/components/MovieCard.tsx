import { Card, CardMedia, CardHeader } from '@mui/material';
import '../cssfiles/moviecard.css';

interface Movie {
  id: number;
  poster_path: string; 
}

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({movie}) => {
  return (
    <Card className='cardMediaCss' sx={{ maxWidth: 200, margin: 1, backgroundColor: '#092635' }}>
      <CardHeader style={{ backgroundColor: '#1B4242', color: '#9EC8B9', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        title={movie.id}
        subheader={<span color='white'>Available for stream</span>}
      />
      <CardMedia onClick={() => {console.log(movie.id)}}
        component="img"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
    </Card>
  );
}

export default MovieCard;