import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Saloni Angre</b> and I am from Seattle.
            I'm a <b>Software Engineer</b> turned <b>Technical Product Manager</b> currently pursuing my <b>Master's in Information Systems</b>. <br/><br/>
            I hold a Bachelor's in Information Technology and have hands-on experience in backend development, ML research, and product strategy. Most recently, I completed a <b>Technical Product Manager internship at NVIDIA's CUDA team</b>, where I owned developer-facing AI platform initiatives by partnering with engineering, research, technical marketing, and product teams to define roadmap priorities and launch new capabilities. I synthesized customer feedback, product usage analytics, and competitive research to prioritize product enhancements that increased platform adoption. I also collaborated cross-functionally on product launches, technical demonstrations, and go-to-market readiness while ensuring alignment across stakeholders. Previously, I worked as a <b>Software Engineer at LTIMindtree</b>, building enterprise software products and improving operational efficiency by 18% through data-driven analysis. My curiosity for intelligent systems has driven me to explore LLMs, RAG systems, and prompt engineering through personal projects.
            Outside of work, I'm a strong believer in building with purpose and creativity. You can find some of my technical and research projects in the Projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do Travel. <a href="https://www.linkedin.com/in/saloniangre/" target='_blank' rel="noreferrer">Linkedin.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Python' />
        <Skills skill='SQL' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
        <Skills skill='Power BI' />
        <Skills skill='Excel' />
        <Skills skill='Product Strategy' />
        <Skills skill='LLMs' />
        <Skills skill='RAG' />
        
      </div>
    </>
  )
}

export default About