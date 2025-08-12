import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import '../styles/Contact.scss';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef();

  useEffect(() => {
    gsap.fromTo (
      contactRef.current, {opacity: 0, y: 200},
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reset',
        }
      }
    );
  }, []);
  
  return (
    <section id='Contact' className='Contact' ref={contactRef}>
      <h2>Contact</h2>
      <ul className='contact'>
        <li className='icon-circle'><a href='https://github.com/Hwang-Jisu'><i class="fa-brands fa-github"></i></a></li>
        <li className='icon-circle'><a href='mailto:hjs96hjs@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
        <li className='icon-circle'><a href='tel:01084884360'><i class="fa-solid fa-mobile-screen"></i></a></li>
      </ul>
    </section>
  );
};

export default Contact;