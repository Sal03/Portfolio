import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    EquationSolverDesc: "A GUI-based calculator that uses artificial neural networks to recognize and solve handwritten mathematical equations. Built with Python, TensorFlow, and Keras, this project demonstrates real-time digit and operator recognition for interactive problem-solving.",
    EquationSolverGithub: "https://github.com/Sal03/Handwritten-Mathematical-Equation-Solver",

    MediBuddyDesc: "A disease prediction system that uses Random Forest and SVM models to detect health issues like breast cancer and liver disease. Built using Python and integrated with Cassandra for data handling, it also features deep learning models (VGG19) for accurate malaria and pneumonia detection.",
    MediBuddyGithub: "https://github.com/Sal03/Medibuddy-Smart-disease-predictor",

    ChurnDashboardDesc: "An interactive dashboard for employee churn analysis built using Python, Pandas, and Matplotlib. It visualizes attrition trends, identifies key factors affecting churn, and helps HR teams make data-driven retention decisions.",
    ChurnDashboardGithub: "https://github.com/Sal03/churn-dashboard",
    
    BrainTumorDetectionDesc: "A deep learning-based application for detecting brain tumors from MRI scans. Built using Python, TensorFlow, and CNN architectures, it automates tumor classification and helps improve early diagnosis through medical image analysis.",
    BrainTumorDetectionGithub: "https://github.com/Sal03/MRI-Brain-Tumor-Detection",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox