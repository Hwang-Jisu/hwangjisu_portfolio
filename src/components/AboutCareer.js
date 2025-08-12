import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import '../styles/AboutCareer.scss';

const career = [
  { title: '골프존 Application / Web / Screen(투비전 NX) QA', company: '지앤서비스', period: '2023 ~ 2024'},
  { title: '한국가스기술공사 사이트 개발 / 유지보수건 QA', company: 'TFS', period: '2024'}
];

const AboutCareer = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current.children, {autoAlpha: 0, y: 20},
      {
        autoAlpha: 1,
        y: 0,
        duration: .6,
        stagger: .2,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play reset play reset'
        }
      }
    );
  }, []);

  return (
    <div className='about-block career'>
      <h3>Career</h3>
      <div className='career-list' ref={ref}>
        {career.map((c,i) => 
          <div key={i} className='career-item'>
            <h4>{c.title}</h4>
            <p>{c.company}</p>
            <p>{c.period}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCareer;