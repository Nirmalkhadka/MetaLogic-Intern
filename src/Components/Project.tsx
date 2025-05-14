import React, { useState } from 'react';
import '../Style/Project.css';  // Include your styles for this component

const Project: React.FC = () => {
  const projects = [
    {
      name: 'Mobile App UI/UX Design From Scratch',
      description: 'A mobile app UI/UX design built from scratch, focusing on intuitive navigation and user engagement.',
      image: '/images/mobile.jpeg',  // Use actual image path
    },
    {
      name: 'Web App UI/UX Design for Business Consultation',
      description: 'A web application redesign aimed at LinkedIn users, enhancing the user experience and monetization features.',
      image: '/images/web.png',
    },
    {
      name: 'Social Media Sharing Platform Redesign',
      description: 'A complete redesign of a social sharing platform’s UI/UX, focusing on user accessibility and visual appeal.',
      image: '/images/used.jpeg',
    }
  ];

  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-container">
      <h2 className="project-header">Our Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt="Project" 
                className="project-image"
              />
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <button className="read-more-btn" onClick={() => openModal(project)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal for "Read More" */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <div className="modal-project">
              <div className="modal-image-container">
                <img 
                  src={selectedProject.image} 
                  alt="Project Image" 
                  className="modal-image"
                />
              </div>
              <div className="modal-description">
                <h3>{selectedProject.name}</h3>
                <p>{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
