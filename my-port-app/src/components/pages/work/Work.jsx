import './Work.css';
import Weaimg from '../../../assets/IMAGES/Weaimg.jpg';
import chatappimg from '../../../assets/IMAGES/chatappimg.jpg';
import hotelappimg from '../../../assets/IMAGES/hotelappimg.jpg';
import youcloneimg from '../../../assets/IMAGES/youcloneimg.jpg';
import { BsGithub } from 'react-icons/bs';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';
// import { useState } from 'react';
// import chatappimg from '../../../assets/IMAGES/chatappimg.jpg';
function Work() {
  return (
    <div className="work-container" id="work">
      <div className="work-heading">
        <h3>Work</h3>
        <span>.</span>
      </div>
      <p className="para">Here are some of my works</p>
      <section className="work-section">
        <div className="project-1">
          <div className="project-img-div">
            <img src={hotelappimg} className="hotel-img"></img>
            <div className="detail">
              <p>
                Developed a fully functional desktop booking application with
                user authentication and a dynamic user interface using ReactJS
                and Express JS. Collaborated on database schema and integrated
                it with the frontend for secure data handling.
              </p>
              <ul>
                <li>
                  <button>
                    <BsFillArrowUpRightSquareFill className="btn-icon" /> Demo
                  </button>
                </li>
                <li>
                  <button>
                    <BsGithub className="btn-icon" /> Code
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <p>Hotel Booking Application</p>
        </div>
        <div className="project-2">
          <div className="project-img-div2">
            <img src={youcloneimg} className="youtube-img"></img>
            <div className="youtube-detail">
              <p>
                Created a fully functional YouTube clone application using
                React.js and Material UI 5, mimicking the user interface and
                core functionalities of the popular video-sharing platform
              </p>
              <ul>
                <li>
                  <button>
                    <BsFillArrowUpRightSquareFill className="btn-icon" /> Demo
                  </button>
                </li>
                <li>
                  <button>
                    <BsGithub className="btn-icon" /> Code
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <p>Modern youtube Clone</p>
        </div>
        <div className="project-3">
          <div className="project-img-div3">
            <img src={chatappimg} className="chat-img"></img>
            <div className="detail3">
              <p>
                Created a real-time private chat application with secure user
                authentication using React.js and Firebase. Users can
                communicate confidentially in real-time.
              </p>
              <ul>
                <li>
                  <button>
                    <BsFillArrowUpRightSquareFill className="btn-icon" /> Demo
                  </button>
                </li>
                <li>
                  <button>
                    <BsGithub className="btn-icon" /> Code
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <p>Private Chat Application</p>
        </div>
        <div className="project-4">
          <div className="project-img-div4">
            <img src={Weaimg} className="wea-img"></img>
            <div className="detail4">
              <p>
                Developed a weather forecasting application that retrieves live
                data from external APIs, providing users with up-to-date weather
                information in a user-friendly interface.
              </p>
              <ul>
                <li>
                  <button>
                    <BsFillArrowUpRightSquareFill className="btn-icon" /> Demo
                  </button>
                </li>
                <li>
                  <button>
                    <BsGithub className="btn-icon" /> Code
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <p>Weather Application</p>
        </div>
        <div className="project-5">
          <img src={Weaimg} className="wea-img"></img>
          <p>Weather Application</p>
        </div>
      </section>
    </div>
  );
}

export default Work;
