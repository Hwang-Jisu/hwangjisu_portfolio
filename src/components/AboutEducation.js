import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import '../styles/AboutEducation.scss';

const AboutEducation = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current.children, {autoAlpha:0, y: 20}, {
      autoAlpha: 1,
      y: 0,
      duration: .6,
      stagger: .2,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play reset play reset'
      }
    });
  }, []);

  return (
    <div className='about-block education' ref={ref}>
      <h3>Education</h3>
      <div>
        <h4>취업을 향한 도전 프론트엔드의 모든 것 (UIUX, 반응형 웹, 모바일 웹, REACT, SQL)</h4>
        <p>세잔IT직업전문학교</p>
        <p>2025. 02. 07 ~ 2025. 08. 22</p>
      </div>
    </div>
  )
}

export default AboutEducation;