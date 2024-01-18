import React from 'react'
import './footer.css'
import gpt3Logo from '../../asset/logo.png'

function footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
     
      </div>
   
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img
            src={gpt3Logo}
            alt="gpt3 logo"
          />
          <p>This is my portfolio page dedicated to website development.</p>
        </div>
        <div className="gpt3__footer-links_divs">
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counter</p>
            <p>Contact</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <small>© 2024 Asiya. All rights reserved.</small>
      </div>
    </div>
  );
}

export default footer