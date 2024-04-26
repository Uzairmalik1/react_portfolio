import {React, useEffect }from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js'
import Home from "./components/Home/Home.js";
import About from './components/About/About.js'
import Services from './components/Services/Services.js'
import Project from './components/Project/Project.js'
import Blog from './components/Blog/Blog.js'
import Contect from './components/Contect/Contect.js'
import Footer from './components/Footer/Footer.js';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything visible
}


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contect' element={<Contect />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
