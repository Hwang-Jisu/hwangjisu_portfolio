import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import '../styles/Project.scss';
import project5 from '../img/project5.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'Project 2', img: 'https://picsum.photos/1600/900'},
  { id: 2, title: 'Project 3', img: 'https://picsum.photos/1600/900'},
  { id: 3, title: 'Project 4', img: 'https://picsum.photos/1600/900'},
  { id: 4, title: 'Project 5', img: 'https://picsum.photos/1600/900'},
  { id: 5, title: 'Swatch - vue', img: project5, link: 'https://hwang-jisu.github.io/swatch/'},
];

const Project = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const { width, left } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const percent = Math.min(Math.max(mouseX / width, 0), 1);
      const maxTranslate = Math.max(slider.scrollWidth - container.offsetWidth, 0);

      slider.style.transform = `translateX(${-maxTranslate * percent}px)`;
    };

    gsap.fromTo (
      section, {opacity: 0, y: 200},
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 100%',
          toggleActions: 'play none none reset'
        }
      }
    );

    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);
  
  return (
    <section id='Project' className='Project' ref={sectionRef}>
      <h2 className='project-title'>Projects</h2>
      <div className='slider-container' ref={containerRef}>
        <div className='slider' ref={sliderRef}>
          {projects.map(project => (
            <a 
              key={project.id}
              href={project.link}
              target='_blank'
              rel="noopener noreferrer"
              className='slide'
              >
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;