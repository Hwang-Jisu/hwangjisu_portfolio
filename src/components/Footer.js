import React, { useEffect, useRef } from 'react';
import '../styles/Footer.scss';

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const foot = footerRef.current;
    setTimeout(() => {
      foot.classList.add('fade-in');
    }, 1000);
  }, []);

  return (
  <div className='Footer' ref={footerRef}>
      <ul>
        <li>
          <a href='https://github.com/Hwang-Jisu' target='_blank' rel="noopener noreferrer">깃허브</a>
        </li>
        <li>
          <a href='mailto:hjs96hjs@gmail.com'>이메일</a>
        </li>
        <li>
          <a href='tel:01084884360'>휴대전화</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer;