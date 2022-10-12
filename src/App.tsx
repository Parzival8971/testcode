import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/movie/:id' element={<MoiveDetail />} />
        <Route path='/tv/:id' element={<TvDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
