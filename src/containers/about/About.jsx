import React from 'react'
import './about.css'

import ai2 from '../../asset/about.png'

function About() {
  return (
    <div
      className="gpt3__header section__padding"
      id="home"
    >
          <div className="gtp3__header-image">
        <img src={ai2} alt="ai2" />
      </div> 
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
         Hi, I am Asiya.  Web design and web developer
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus
        </p>
      
      </div>
    
   
    </div>
  );
}

export default About