// import React from 'react';
import './skill.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/Si';
import { FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
// import { HiMiniCodeBracket } from 'react-icons/hi2';
// import { HiCode } from 'react-icons/hi2';
function Skill() {
  return (
    <div className="Skill-container" id="skill">
      <div className="skill-heading">
        <h3>My Skills</h3>
        <span></span>
      </div>
      <p className="para">Here is my skills</p>
      <div className="skill-section">
        <div className="skill-section-left">
          <div>
            <ul className="skill-ul">
              <li>
                <AiFillHtml5 />
              </li>
              <li>HTML</li>
            </ul>
            <div className="white">
              <div className="yellow-html"></div>
            </div>
          </div>
          <div>
            <ul className="skill-ul">
              <li>
                <DiCss3 />
              </li>
              <li>CSS</li>
            </ul>
            <div className="white">
              <div className="yellow-css"></div>
            </div>
          </div>
          <div>
            <ul className="skill-ul">
              <li>
                <IoLogoJavascript />
              </li>
              <li>Javascript</li>
            </ul>
            <div className="white">
              <div className="yellow"></div>
            </div>
          </div>
          <div>
            <ul className="skill-ul">
              <li>
                <FaReact />
              </li>
              <li>React</li>
            </ul>
            <div className="white">
              <div className="yellow"></div>
            </div>
          </div>
          <div>
            <ul className="skill-ul">
              <li>
                <SiExpress />
              </li>
              <li>Express Js</li>
            </ul>
            <div className="white">
              <div className="yellow"></div>
            </div>
          </div>
        </div>

        <div className="skill-section-right">
          <div className="sec-right-box1">
            <div className="skill-right-icon-div">
              <FaNodeJs className="skill-right-icon" />
              <p>Node js</p>
            </div>
            <div className="skill-right-icon-div">
              <SiExpress className="skill-right-icon" />
              <p>Express js</p>
            </div>
          </div>
          <div className="sec-right-box2">
            <div className="skill-right-icon-div1">
              <DiMongodb className="skill-right-icon-box2" />
              <p>Mongo DB</p>
            </div>
            <div className="skill-right-icon-div1">
              <DiMongodb className="skill-right-icon-box2" />
              <p>C++</p>
              {/* <HiCode /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
