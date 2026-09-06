import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    CudaAnalyzerDesc: "A full-stack web app that scores the quality of any public CUDA sample repository. Paste a GitHub URL and it analyzes each sample directory across documentation, code clarity, best practices, and API modernity, then returns a scored dashboard. Built with a FastAPI analysis engine and a React frontend.",
    CudaAnalyzerGithub: "https://github.com/Sal03/cuda-analyzer-web",
    CudaAnalyzerWebsite: "https://cuda-analyzer-web.vercel.app/",

    EquationSolverDesc: "A GUI-based calculator that uses artificial neural networks to recognize and solve handwritten mathematical equations. Built with Python, TensorFlow, and Keras, this project demonstrates real-time digit and operator recognition for interactive problem-solving.",
    EquationSolverGithub: "https://github.com/Sal03/Handwritten-Mathematical-Equation-Solver",

    MediBuddyDesc: "A disease prediction system that uses Random Forest and SVM models to detect health issues like breast cancer and liver disease. Built using Python and integrated with Cassandra for data handling, it also features deep learning models (VGG19) for accurate malaria and pneumonia detection.",
    MediBuddyGithub: "https://github.com/Sal03/Medibuddy-Smart-disease-predictor",

    ChurnDashboardDesc: "An interactive dashboard for employee churn analysis built using Python, Pandas, and Matplotlib. It visualizes attrition trends, identifies key factors affecting churn, and helps HR teams make data-driven retention decisions.",
    ChurnDashboardGithub: "https://github.com/Sal03/churn-dashboard",
    
    BrainTumorDetectionDesc: "A deep learning-based application for detecting brain tumors from MRI scans. Built using Python, TensorFlow, and CNN architectures, it automates tumor classification and helps improve early diagnosis through medical image analysis.",
    BrainTumorDetectionGithub: "https://github.com/Sal03/MRI-Brain-Tumor-Detection",
  }

  const githubLink = desc[projectName + 'Github'];
  const websiteLink = desc[projectName + 'Website'];

  const showGithub = githubLink ? '' : 'none';
  const showWebsite = websiteLink ? '' : 'none';

  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:showGithub}} href={githubLink} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a style={{display:showWebsite}} href={websiteLink} target='_blank' rel="noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox