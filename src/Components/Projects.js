import React from 'react';
import ProjectBox from './ProjectBox';
import BrainTumorImage from '../images/BrainTumorImage.png';
import ChurnDashboardImage from '../images/ChurnDashboardImage.png';
import MediBuddyImage from '../images/MediBuddyImage.png';
import EquationSolverImage from '../images/EquationSolverImage.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
      <ProjectBox projectPhoto={BrainTumorImage} projectName="BrainTumorDetection" />
      <ProjectBox projectPhoto={ChurnDashboardImage} projectName="ChurnDashboard" />
      <ProjectBox projectPhoto={MediBuddyImage} projectName="MediBuddy" />
      <ProjectBox projectPhoto={EquationSolverImage} projectName="EquationSolver" />
      </div>
  </div>

  )
}

export default Projects