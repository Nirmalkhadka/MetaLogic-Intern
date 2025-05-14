import React, { useEffect, useState } from 'react';
import '../Style/Development.css';  

const DevelopmentProcess: React.FC = () => {
  const steps = [
    {
      title: "Requirement Gathering",
      description: "We listen to your needs and define clear goals for the project.",
      image: "/images/download.jpg"
    },
    {
      title: "Design",
      description: "We create designs that are visually appealing and user-friendly.",
      image: "/images/OIP (2).jpg"
    },
    {
      title: "Development",
      description: "Break down the design into code, ensuring functionality and responsiveness.",
      image: "/images/download (1).jpg"
    },
    {
      title: "Testing",
      description: "Conduct usability and functionality tests to ensure the designs work across all devices and browsers.",
      image: "/images/download (2).jpg"
    },
    {
      title: "Final Delivery",
      description: "Present the final design to the client and make necessary revisions based on feedback.",
      image: "/images/OIP.jpg"
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  // Declare interval variable outside of useEffect
  let interval: ReturnType<typeof setInterval>;

  useEffect(() => {
    // Set up the interval for the slideshow, which pauses on hover
    if (!isHovered) {
      interval = setInterval(nextStep, 2000); // Change interval to 2 seconds (2000ms)
    } else {
      clearInterval(interval); // Clear interval when mouse is hovered
    }

    return () => clearInterval(interval); // Clean up the interval when the component unmounts or isHovered changes
  }, [isHovered]);  

  return (
    <div
      className="development-process"
      onMouseEnter={() => setIsHovered(true)}  // Set to true when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Set to false when mouse leaves
    >
      <h2 className="section-title">How We Build UI/UX for You</h2>
      <div className="steps-container">
        {steps.slice(currentStep, currentStep + 2).map((step, index) => (
          <div key={index} className="step-card">
            <img src={step.image} alt={step.title} className="step-image" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentProcess;
