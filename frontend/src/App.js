import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout.jsx';
import { Route, Routes } from 'react-router-dom';
import { Compare } from './pages/compare/compare';
import { Upload } from './pages/upload/upload';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/compare" element={<Compare />} />
        <Route path="/upload" element={<Upload />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
