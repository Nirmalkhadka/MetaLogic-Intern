import React from 'react';
import '../Style/Tech.css';  // Import the updated CSS

const Tech: React.FC = () => {
  const techStack = [
    { name: 'Adobe Illustrator', image: '/images/ai.jpg' },
    { name: 'HTML', image: '/images/html.jpg' },
    { name: 'SaaS', image: '/images/saas.jpg' },
    { name: 'Sketch', image: '/images/sketch.jpg' },
    { name: 'CSS', image: '/images/css.jpg' },
    { name: 'Figma', image: '/images/figam.jpg' },
    { name: 'Adobe XD', image: '/images/adobe xd.jpg' }
  ];

  return (
    <div className="tech-stack-container">
      <h2 className="tech-title">Technology we behold</h2>
      <div className="underline"></div>

      <p>Discover how we personalize your experience with customized features and effortlessly scale your system to match your growing needs.</p>

      <div className="tech-icons">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-item">
            {/* Logo Image */}
            <div className="tech-icon">
              <img src={tech.image} alt={tech.name} className="tech-image" />
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
