import './App.css';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="root">
      <CssBaseline />
      <header>
        <Navbar />
      </header>
      <main className="content">
        <div className="toolbar" />
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
