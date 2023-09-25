// import React from 'react'
import { useState } from 'react';
import './header.css';
function Header() {
  const [fixed, setFixed] = useState(false);
  function scrollingfixed() {
    if (window.scrollY > 390) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }
  window.addEventListener('scroll', scrollingfixed);
  return (
    <div className={fixed ? 'Headerfixed' : 'Header'} id="header">
      <nav>
        <div className="logo">
          <h2>Portfolio</h2>
        </div>
        <div className="navdiv2">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#work">Works</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="" className="hire">
                Hire me
              </a>
              {/* <button className="hireme-btn">Hire me</button> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
