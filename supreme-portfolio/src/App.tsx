import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyledTitle } from './pages/styledComponents';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={<StyledTitle>projects</StyledTitle>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
