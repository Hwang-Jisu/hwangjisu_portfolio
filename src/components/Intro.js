import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/Intro.scss';
import heart from '../img/heart.jpg';

const heartCount = 15;

const Intro = ({onComplete}) => {
  const heartRefs = useRef([]);
  const ContainerRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const positionHearts = () => {
    const radius = 300;
  
    const container = ContainerRef.current;
    if (!container) return;
  
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
  
  
    heartRefs.current.forEach((el, i) => {
      if (!el) return;
      const angle = (Math.PI * 2 / heartCount) * i;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
  
      el.style.position = 'absolute';
      el.style.top = `${y}px`;
      el.style.left = `${x}px`;
      el.style.margin = '0';
      el.style.transform = 'translate(-50%, -50%)';
    });
  }

  
  useEffect(() => {
    positionHearts();

    gsap.fromTo(
      heartRefs.current,
      {opacity : 0, scale : 0.5},
      {
        opacity : 1, scale : 1, duration : 1, stagger : 0.1, ease : 'back.out(2)',
        onComplete : () => {
          setTimeout(() => {
            setIsFadingOut(true);
            }, 1000);
          }
        }
    );
    heartRefs.current.forEach((el, i) => {
      gsap.to(el, {
        yPercent : 10,
        repeat : -1,
        yoyo : true,
        duration : 2 + Math.random(),
        ease : 'sine.inOut',
        delay : i * 0.1
      });
    });

    window.addEventListener('resize', positionHearts);
    return () => {
      window.removeEventListener('resize', positionHearts);
    }
  }, []);

  useEffect(() => {
    if (isFadingOut) {
      const timer = setTimeout(() => {
        onComplete?.();
      },1000);
      return () => clearTimeout(timer);
    }
  }, [isFadingOut, onComplete]);

  return (
    <section id='Intro' className={`Intro ${isFadingOut ? 'fade-out' : ''}`} ref={ContainerRef}>
      <div className='hearts'>
        {Array.from({length : heartCount}).map((_,i) => (
          <img 
            key={i}
            ref={(el) => (heartRefs.current[i] = el)}
            src={heart}
            alt='heart'
            className={`heart heart-${i}`}
          />
        ))}
      </div>
    <div className='intro_text'>
      <h1>WELCOME</h1>
      <p>HWANG JISU'S PORTFOLIO</p>
    </div>
    </section>
  );
};

export default Intro;