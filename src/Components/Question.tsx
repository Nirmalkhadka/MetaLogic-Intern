import React, { useState } from "react";
import "../Style/Question.css";

const questions = [
  {
    question: "What is UI/UX design and why is it important for my business?",
    answer:
      "UI/UX design is the process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure in interaction. It is crucial for ensuring that your users have a positive experience, which can drive customer retention and business success.",
  },
  {
    question: "What is branding and how does it relate to UI/UX design?",
    answer:
      "Branding is the process of creating a unique name, design, and image for a product in the consumer's mind. UI/UX design is a key part of branding as it ensures the product's interface reflects the brand identity and provides an excellent user experience.",
  },
  {
    question: "Can METALOGIC help with the redesign of existing websites or applications?",
    answer:
      "Yes, METALOGIC specializes in redesigning websites and applications to improve usability, aesthetics, and functionality. We focus on enhancing the user experience and ensuring the product meets the latest industry standards.",
  },
];

const Question: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Toggle the active question's index
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if the same question is clicked again
    } else {
      setActiveIndex(index); // Open the new question
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>

            {/* Conditional rendering of the answer */}
            <div
              className={`faq-answer ${activeIndex === index ? "show" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
