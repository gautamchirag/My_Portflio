import emailjs from '@emailjs/browser';
import './contact.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillSendFill } from 'react-icons/bs';
import { useRef } from 'react';

function Contact() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current);
    console.log(e);
    emailjs
      .sendForm(
        'service_7qkmec9',
        'template_2t2y8xu',
        form.current,
        'LS1MaY4Pz-2nY4Gpz'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact-container" id="contact">
      <div className="contact-heading">
        <h3>Contact</h3>
        <span></span>
      </div>
      <div className="contact-content-section">
        <div className="contact-left-section-container">
          <div className="contact-content">
            <h1>You Need</h1>
            <h3>Beautiful design for your website leave a request</h3>
          </div>
          <div className="arrow-icon">
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="contact-right-section-container">
          <form className="contact-form" onSubmit={handleSubmit} ref={form}>
            <input
              type="email"
              placeholder="Enter your email"
              name="user_name"
              required
            />
            <input
              type="text"
              placeholder="Enter your name"
              name="user_email"
              required
            />
            <textarea
              placeholder="Enter your message"
              name="user_desc"
              required
            />
            <button type="submit">
              Send <BsFillSendFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
