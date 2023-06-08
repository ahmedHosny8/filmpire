import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { makeStyles } from 'tss-react/mui';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchMovie } from '../features/currentGenreOrCategory';

const useStyles = makeStyles()((theme) => {
  return {
    searchContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      },
    },
    input: {
      color: theme.palette.mode === 'light' && 'dark',
      filter: theme.palette.mode === 'light' && 'invert(1)',
      [theme.breakpoints.down('sm')]: {
        marginTop: '-10px',
        marginBottom: '10px',
      },
    },
  };
});

function Search() {
  const { classes } = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  if (location.pathname !== '/') return null;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Search;
