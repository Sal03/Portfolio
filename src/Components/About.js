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
            I hold a Bachelor's in Information Technology and have hands-on experience in backend development, ML research, and product strategy. Most recently, I completed a <b>Technical Product Manager internship on NVIDIA's CUDA team</b>, where I owned developer facing AI platform initiatives by partnering with engineering, research, technical marketing, and product teams to define roadmap priorities and launch new capabilities. I synthesized customer feedback, product usage analytics, and competitive research to prioritize enhancements that increased platform adoption, and authored product requirements, executive presentations, and positioning materials to support strategic decisions. Previously, I worked as a <b>Software Engineer at LTIMindtree</b>, shipping enterprise software products and using SQL and product analytics to improve operational efficiency by 18%. That engineering foundation is what lets me work credibly with technical teams on <b>LLMs</b>, <b>RAG</b>, and product analytics today.
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

        <Skills skill='Product Strategy' />
        <Skills skill='Roadmapping' />
        <Skills skill='Prioritization' />
        <Skills skill='Go-to-Market' />
        <Skills skill='User Research' />
        <Skills skill='Competitive Analysis' />
        <Skills skill='SQL' />
        <Skills skill='Power BI' />
        <Skills skill='Excel' />
        <Skills skill='Product Analytics' />
        <Skills skill='Experimentation' />
        <Skills skill='LLMs' />
        <Skills skill='RAG' />
        <Skills skill='Prompt Engineering' />
        <Skills skill='REST APIs' />
        <Skills skill='Agile' />
        <Skills skill='Python' />
        <Skills skill='Java' />
        <Skills skill='AWS' />
        <Skills skill='Docker' />
        <Skills skill='Git' />
        <Skills skill='Github' />

      </div>
    </>
  )
}

export default About