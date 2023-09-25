// import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="talkdiv">
        <span>Lets Talk</span>
      </div>
      <div className="icondiv">
        <div>
          <FaTelegramPlane className="icon" /> <span>Telegram</span>
        </div>
        <div>
          <IoLogoWhatsapp className="icon" /> <span>Whatsapp</span>
        </div>
        <div>
          <AiFillInstagram className="icon" />
          <span>Instagram</span>
        </div>
      </div>
      <div>| Copyright © 2023 Portfolio. All rights reserved |</div>
    </footer>
  );
}

export default Footer;
