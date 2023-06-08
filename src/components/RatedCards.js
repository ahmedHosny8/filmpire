import { Typography, Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Movie from './Movie';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      color: theme.palette.primary.main,
    },
    apply: {
      marginRight: theme.spacing(2),
    },
  };
});

function RatedCards({ title, data }) {
  const { classes } = useStyles();

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i}></Movie>
        ))}
      </Box>
    </Box>
  );
}

export default RatedCards;
