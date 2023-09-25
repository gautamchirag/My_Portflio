// import React from 'react'
import './resume.css';
function Resume() {
  return (
    <div className="Resume-container" id="resume">
      <div className="resume-heading">
        <h3>Resume</h3>
        <span></span>
      </div>
      <p className="para">Here are my experiences and qualifications.</p>
      <section className="resume-section">
        <div className="edu-container">
          <span className="head-intern">Internship</span>
          <div className="intern-detail">
            <div className="resume-icon-bar">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <div className="resume-contents">
              <h1 className="head">Frontend Developer Intern</h1>
              <span>Listyaan</span>
              <span>May 2023 - July 2023</span>
              <p>
                I played a pivotal role in crafting user interfaces for their
                website, utilizing React to design responsive and user-friendly
                layouts. In addition to my internship, In my current internship
                at Listyaan, I'm working as a Frontend Developer focusing on the
                frontend development using React JS, where I work on creating
                interactive and user-friendly interfaces
              </p>
            </div>
          </div>
        </div>
        <div className="intern-container">
          <span className="head-edu">Education</span>
          <div className="intern-detail">
            <div className="resume-icon-bar">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <div className="resume-contents">
              <h1 className="head">Frontend Developer Intern</h1>
              <span>Nsut East Campus</span>
              <span>Year 2019 - Year 2023</span>
              <p>
                As an undergraduate student, I have a good understanding of web
                development technologies such as HTML, CSS, Tailwind CSS,
                JavaScript, and React JS. Additionally, I'm proficient in
                backend technologies such as Node.js, Express.js, and MongoDB. I
                also have skills in C++ and problem-solving using Data
                structures and Algorithms
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
