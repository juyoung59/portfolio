import React from 'react';
import Project from './Project';
import projectData from './ProjectData';

const ExampleComponent = () => {
  return (
    <div id='project' style={{ paddingTop: '200px' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>Projects</h1>
    
      <div className="projects">
        {projectData.map((project) => (
          <Project key={project.id} image={project.image} title={project.title} detail={project.detail} period={project.period} used={project.used} link={project.link} source={project.source} />
        ))}
      </div>
    </div>
  );
};

export default ExampleComponent;
