import { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import useAlan from './components/Alan';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: 'flex',
      height: '100%',
    },
    content: {
      flexGrow: 1,
      padding: '2em',
      width: '100%',
    },
    toolbar: {
      height: '70px',
    },
  };
});

function App() {
  const { classes } = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
      <div ref={alanBtnContainer} />
      <footer></footer>
    </div>
  );
}

export default App;
