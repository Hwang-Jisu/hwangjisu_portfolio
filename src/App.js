import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './styles/App.scss';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [aboutReady, setAboutReady] = useState(false);

  useEffect(() => {
    if(showIntro) {
      setTimeout(() => {
        setAboutReady(true);
        ScrollTrigger.refresh();
      }, 100);
    }
  },[showIntro]);
  
  return (
    <div className='App'>
      {!showIntro && <Intro onComplete={() => setShowIntro(true)}/>}
      {showIntro && (
        <>
          <Navbar />
          <main>
            <Home />
            {aboutReady && <About />}
            <Project />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
