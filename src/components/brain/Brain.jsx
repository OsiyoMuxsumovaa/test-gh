import React from 'react'
import './brain.css'
import { figma, nodejs, github, react} from './import.js'


const Brain = () => {
    return (
      <div className='gpt3__brain section__padding'>
         <div className='brain__content'>
          {/* <h1 className="brain__text">
            Services
          </h1> */}
    
         </div>
        <div className="brain_container">
        <div className='gtp3__brain-image'>
          <div>
          <img src={figma} alt="figma" />
          </div>

        <div>
          <img src={nodejs} alt="nodejs" />
        </div>
        <div>
          <img src={github} alt="github" />
        </div>
        <div>
          <img src={react} alt="react" />
        </div>
        </div>
        </div>
      </div>
    )
  }
  


export default Brain