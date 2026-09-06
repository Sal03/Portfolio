import React from 'react';
import ExperienceBox from './ExperienceBox';
import NvidiaLobby from '../images/NvidiaLobby.jpg';
import NvidiaSign from '../images/NvidiaSign.jpg';
import LTIMindtreeBadge from '../images/LTIMindtreeBadge.jpg';
import LTIMindtreeOffice from '../images/LTIMindtreeOffice.jpg';

const Experience = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Experience</b></h1>
      <div className='project'>

        <ExperienceBox
          photos={[NvidiaLobby, NvidiaSign]}
          company="NVIDIA"
          role="Technical Product Manager Intern, CUDA"
          dates="Aug 2025 – Dec 2025"
          location="Santa Clara, CA"
          points={[
            "Owned developer facing AI platform initiatives, partnering with engineering, research, technical marketing, and product teams to define roadmap priorities and launch new capabilities.",
            "Synthesized customer feedback, usage analytics, and competitive research into prioritized enhancements that improved the CUDA developer experience and platform adoption.",
            "Drove go-to-market readiness across product launches, reference solutions, and technical demonstrations.",
            "Authored product requirements, executive presentations, and positioning materials that supported strategic decisions."
          ]}
          caption="Four months of learning that the hardest part of a roadmap isn't deciding what to build, it's deciding what not to."
        />

        <ExperienceBox
          photos={[LTIMindtreeBadge, LTIMindtreeOffice]}
          company="LTIMindtree"
          role="Software Engineer"
          dates="Jul 2022 – Aug 2024"
          location="Mumbai, India"
          points={[
            "Built and shipped enterprise software products with engineering, product, and business stakeholders, translating user requirements into prioritized features.",
            "Analyzed customer workflows using SQL and product analytics to surface adoption opportunities, improving operational efficiency by 18%.",
            "Partnered across teams through feature planning, launch, testing, and post-release optimization, folding customer feedback into every iteration."
          ]}
          caption="My first badge and two years of shipping to real users, which is where I learned that a feature nobody adopts is just a very expensive opinion."
        />

      </div>
    </div>
  );
};

export default Experience;