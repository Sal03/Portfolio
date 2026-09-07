import React from 'react';
import ExperienceBox from './ExperienceBox';
import NortheasternCampus from '../images/NortheasternCampus.jpg';
import MumbaiCampus from '../images/MumbaiCampus.jpg';

const Education = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Education</b></h1>
      <div style={{ padding: '0 20px' }}>

        <ExperienceBox
          photos={[NortheasternCampus]}
          company="Northeastern University"
          role="Master of Science in Information Systems"
          dates="Sep 2024 – Aug 2026"
          location="Seattle, WA"
          points={[
            "Graduated with a 3.9 / 4.0 GPA.",
            "Coursework in Distributed Systems, Operating Systems, Database Systems, and Machine Learning.",
            "Head of Digital Marketing for GDG on Campus, and Team Lead at NU Lead on the Seattle campus."
          ]}
          caption="Two years of systems courses that made every product conversation easier, because I could finally picture what engineering was actually being asked to build."
        />

        <ExperienceBox
          photos={[MumbaiCampus]}
          company="University of Mumbai"
          role="Bachelor of Engineering in Information Technology"
          dates="Aug 2018 – May 2022"
          location="Mumbai, India"
          reverse={true}
          points={[
            "Graduated with a 3.7 / 4.0 GPA.",
            "Coursework in Data Structures and Algorithms, Machine Learning, AI, DBMS, Deep Learning, and Operating Systems.",
            "Technical Content Writer for GDSC, where I learned that explaining something clearly is its own skill."
          ]}
          caption="Where the whole thing started, four years of figuring out that I liked deciding what to build as much as building it."
        />

      </div>
    </div>
  );
};

export default Education;
