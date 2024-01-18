import React from 'react'
import './header.css'
import people from '../../asset/people.png'
import ai from '../../asset/website-development-services-removebg-preview.png'

function Header() {
  return (
    <div
      className="gpt3__header section__padding"
      id="home"
    >
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
         Hi, I am Asiya.  Web design and web developer
        </h1>
        <p>
        This is my portfolio page dedicated to website development. Here, you can gather information about me, my services, and my websites.
         </p>
        <div className="gtp3__header-content__input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your message"
          />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img
            src={people}
            alt="people"
          />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gtp3__header-image">
        <img src={ai} alt="ai" />
      </div> 
   
    </div>
  );
}

export default Header