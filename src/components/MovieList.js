import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Movie from './Movie';

const useStyles = makeStyles()((theme) => {
  return {
    moviesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      overflow: 'auto',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
  };
});

function MovieList({ movies, numberOfMovies, excludeFirst }) {
  const { classes } = useStyles();
  const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => {
        return <Movie key={i} movie={movie} i={i} />;
      })}
    </Grid>
  );
}

export default MovieList;
