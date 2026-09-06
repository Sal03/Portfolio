import React from 'react';
import { FaPython, FaJava, FaAws, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTensorflow, SiPytorch, SiScikitlearn, SiKubernetes, SiSpringboot } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

const Skills = ({ skill }) => {
  const icon = {
    Python: <FaPython />,
    Java: <FaJava />,
    AWS: <FaAws />,
    Docker: <FaDocker />,
    Kubernetes: <SiKubernetes />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    MongoDB: <SiMongodb />,
    PostgreSQL: <SiPostgresql />,
    MySQL: <DiMysql />,
    TensorFlow: <SiTensorflow />,
    PyTorch: <SiPytorch />,
    ScikitLearn: <SiScikitlearn />,
    SpringBoot: <SiSpringboot />
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill] || (
        <span style={{ fontSize: '1.1rem', textAlign: 'center', padding: '0 8px', lineHeight: 1.3 }}>
          {skill}
        </span>
      )}
    </div>
  );
};

export default Skills;