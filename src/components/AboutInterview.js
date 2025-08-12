import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import '../styles/AboutInterview.scss';

gsap.registerPlugin(ScrollTrigger);

const interviewData = [
  { q: '프론트엔드를 지향하는 이유?', a: '디자인과 개발이 만나면서 단순히 디자인 뿐 아니라, 디자인을 실제로 구현하고 사용자와 연결되는 점이 매력적이라고 생각합니다.' },
  { q: '일에 있어 나의 강점?', a: '일에 방해되지 않는 선에서 두 세 번 확인하는 꼼꼼한 성격이 저의 강점입니다.' },
  { q: '앞으로 이루고 싶은 것?', a: '아직은 주니어 개발자이긴 하지만 꾸준히 새로운 기술과 도구들을 배우며 변화에 유연하게 대응할 수 있고, 사용자에게 더 나은 경험을 제공하는 개발자로 성장하고 싶습니다.' }
];

const AboutInterview = () => {
  const ref = useRef([]);
  useEffect(() => {
    ref.current.forEach((el, idx) => {
      gsap.fromTo(el, {autoAlpha: 0, x: -30},
        {
          autoAlpha: 1,
          x: 0,
          duration: .8,
          delay: idx * 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  return (
    <div className='about-block interview'>
      <h3>Interview</h3>
      {interviewData.map((item,i) => (
        <div key={i} className='qa' ref={el => ref.current[i] = el}>
          <h4>{item.q}</h4>
          <h4>{item.a}</h4>
        </div>
      ))}
    </div>
  );
};

export default AboutInterview;
