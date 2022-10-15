import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout.jsx';
import { Route, Routes } from 'react-router-dom';
import { Compare } from './pages/compare/compare';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/compare" element={<Compare />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
