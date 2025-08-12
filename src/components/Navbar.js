import React, { useEffect, useRef } from 'react';
import '../styles/Navbar.scss';

function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    setTimeout(() => {
      nav.classList.add('fade-in');
    }, 1000);
  }, []);

  return (
  <nav className='Navbar' ref={navRef}>
    <h1></h1>
    <ul>
      {["Home", "About", "Project", "Contact"].map(sec => (
        <li key={sec}>
          <a href={`#${sec}`}>{sec.toUpperCase()}</a>
        </li>
      ))}
    </ul>
    <div className='marquee-wrap'>
      <div className='marquee'>
        <p>
          ❤ THIS PAGE MADE BY REACT & SCSS & GSAP ❤ 
        </p>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;