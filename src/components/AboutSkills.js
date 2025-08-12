import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import '../styles/AboutSkills.scss';

const skills = ['React', 'Vue', 'HTML', 'CSS', 'SCSS', 'jQuery', 'Javascript', 'SQL', 'Figma'];

const AboutSkills = () => {
  const skillRef = useRef(null);
  const licenseRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(skillRef.current.children, {autoAlpha: 0, y: 20}, {
      autoAlpha: 1,
      y: 0,
      duration: .6,
      stagger: .1,
      scrollTrigger: {
        trigger: skillRef.current,
        start: 'top 95%',
        toggleActions: 'play reset play reset'
      }
    });
    gsap.fromTo(licenseRef.current, {autoAlpha: 0, y: 20}, {
      autoAlpha: 1,
      y: 0,
      duration: .6,
      stagger: .1,
      scrollTrigger: {
        trigger: licenseRef.current,
        start: 'top 100%',
        toggleActions: 'play reset play reset'
      }
    });
  }, []);

  return (
    <div className='about-block skills'>
      <h3>Skills</h3>
      <div className='skill-list' ref={skillRef}>
        <h4>이 것을 할 수 있어요</h4>
        {skills.map(s => <p key={s} className='skill'>{s}</p>)}
      </div>
      <div className='license' ref={licenseRef}>
        <h4>자격증</h4>
        <p>정보처리기사</p>
      </div>
    </div>
  )
}

export default AboutSkills;