import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';
import TvPage from './pages/TvPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/tv/:id' element={<TvDetail />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
