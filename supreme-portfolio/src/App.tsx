import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import ProjectDetail from './pages/project/ProjectDetail';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notFound/NotFound';
import styled from 'styled-components';
import Resume from './pages/resume/Resume';

const StyledApp = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <StyledApp className={'App'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
