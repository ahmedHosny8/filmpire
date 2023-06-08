import { makeStyles } from 'tss-react/mui';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles()((theme) => {
  return {
    featuredCardContainer: {
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center',
      height: '510px',
      textDecoration: 'none',
    },
    card: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    cardRoot: {
      position: 'relative',
    },
    cardMedia: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.575)',
      backgroundBlendMode: 'darken',
    },
    cardContent: {
      color: '#fff',
      width: '40%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    cardContentRoot: {
      position: 'relative',
      backgroundColor: 'transparent',
    },
  };
});

function FeaturedMovie({ movie }) {
  const { classes } = useStyles();

  if (!movie) return null;

  return (
    <Box
      component={Link}
      to={`/movie/${movie.id}`}
      className={classes.featuredCardContainer}
    >
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        />
        <Box padding="20px">
          <CardContent
            className={classes.cardContent}
            classes={{ root: classes.cardContentRoot }}
          >
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default FeaturedMovie;
