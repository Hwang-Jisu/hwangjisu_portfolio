import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AboutIntro from '../components/AboutIntro';
import AboutInterview from '../components/AboutInterview';
import AboutSkills from '../components/AboutSkills';
import AboutEducation from '../components/AboutEducation';
import AboutCareer from '../components/AboutCareer';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo (
      el, {opacity: 0, y: 20},
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reset'
        }
      }
    )
  }, []);

  return (
  <section id='About' ref={sectionRef}>
    <h2>About Me</h2>
    <AboutIntro />
    <AboutInterview />
    <AboutSkills />
    <AboutEducation />
    <AboutCareer />
  </section>
  );
}

export default About;
