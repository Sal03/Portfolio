import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import { FaDumbbell } from 'react-icons/fa';
import Avatar from '../images/Avatar.png';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SALONI ANGRE</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
      I'm <b>Saloni Angre</b>, a Technical Product Manager with an engineering background, currently completing my Masters in Information Systems at Northeastern University in Seattle. <br /><br />
      Most recently I was a <b>Technical Product Manager Intern on the CUDA team at NVIDIA</b>, where I owned developer facing AI platform initiatives, partnered with engineering, research, and technical marketing to define roadmap priorities, and authored product requirements and positioning materials that supported strategic decisions.<br /><br />
      Before that I spent two years as a <b>Software Engineer at LTIMindtree</b>, shipping enterprise products and using SQL and product analytics to raise operational efficiency by 18%. That engineering foundation is what lets me work credibly with technical teams on <b>LLMs</b>, <b>RAG</b>, and product analytics today.<br /><br />
      Outside of work, I enjoy travelling and staying fit — so yes, I hit the <b>gym</b> <FaDumbbell style={{ scale: "1.5", rotate: "15deg" }} />.
    </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home