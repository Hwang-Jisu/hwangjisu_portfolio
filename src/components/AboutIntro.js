import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import profile from '../img/profile.jpg';
import '../styles/AboutIntro.scss';

gsap.registerPlugin(ScrollTrigger);

const AboutIntro = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: .8,
        scrollTrigger: {
          trigger:ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reset'
        }
      }
    );
  }, []);

  return (
    <div className='about-block intro' ref={ref}>
      <div className='inner'>
        <img src={profile} alt='profile'/>
        <div>
          <h3>황지수 Hwang Jisu</h3>
          <p>1996. 10. 01.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;