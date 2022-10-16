import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout.jsx';
import { Route, Routes } from 'react-router-dom';
import { Compare } from './pages/compare/compare';
import { Leaderboard } from './pages/leaderboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Compare />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
