// import React from 'react'

import Header from '../Header/Header';
import myimg2 from '../../assets/IMAGES/myimg2.png';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import resume from '../../assets/IMAGES/resume.pdf';
import './hero.css';

function Hero() {
  return (
    <div className="Hero-Div-start" id="hero">
      <Header />
      <section className="hero-section">
        <div className="left-div">
          <div className="left-div-content">
            <h1>Hello, I am Chirag Gautam</h1>
            <h2 className="h2-role">Web Developer</h2>
            <span className="desc-span">
              I'm an undergraduate student at Nsut East Campus
            </span>
            <div className="left-btn">
              <a>Hire Me</a>
              <a href={resume} target="_blank">
                Resume <AiOutlineDownload className="down-icon" />
              </a>
            </div>
          </div>
          <div className="icon-list">
            <ul>
              <li>
                <BsLinkedin className="icon" />
              </li>
              <li>
                <BsGithub className="icon" />
              </li>
              <li>
                <AiFillInstagram className="icon" />
              </li>
            </ul>
          </div>
        </div>
        <div className="right-div">
          <div className="img-back-div">
            <div className="img-div">
              <img src={myimg2}></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
