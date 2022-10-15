import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
