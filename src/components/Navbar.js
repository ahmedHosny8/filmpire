import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { makeStyles } from 'tss-react/mui';
import { Link } from 'react-router-dom';

const useStyles = makeStyles()((theme) => {
  return {
    toolbar: {
      height: '80px',
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: '240px',
    },
  };
});

function Navbar() {
  const { classes } = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}></Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
