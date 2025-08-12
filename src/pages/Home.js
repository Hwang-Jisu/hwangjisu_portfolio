import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/Home.scss';
import character from '../img/character.png';
import character2 from '../img/character2.png';

function Home() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [ischaracter, setCharacter] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    setTimeout(() => {
      section.classList.add('bg-loaded')
    },100);

    setTimeout(() => {
      gsap.fromTo(
        content,
        { autoAlpha: 0, y : 0},
        {
          autoAlpha : 1,
          y : 0,
          duration: 1,
          delay : 2,
          ease: 'power3.out'
        }
      )
    },200);
  }, []);

  return(
    <section id='Home' className='Home' ref={sectionRef}>
      <div className='Home-content' ref={contentRef}>
        <h2><span>사용자</span>를 위한, <span>사용자</span>에 의한, <span>사용자</span> 중심</h2>
        <h3><span>인터페이스</span>를 만드는 프론트엔드 개발자 <span>황지수</span>입니다.</h3>
        <img src={ischaracter ? character2 : character} alt='character'
        onMouseEnter={() => setCharacter(true)}
        onMouseLeave={() => setCharacter(false)}
        />
      </div>
    </section>
  )
};

export default Home;