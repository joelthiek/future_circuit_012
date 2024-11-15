// src/components/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css'; // We'll style it separately

const questions = [
  {
    question: "What is ResumeCraft?",
    answer: "ResumeCraft is an online platform that helps you create professional resumes with customizable templates.",
  },
  {
    question: "How do I use ResumeCraft?",
    answer: "Simply select a template, fill in your details, and generate a professional resume instantly.",
  },
  {
    question: "Is ResumeCraft free to use?",
    answer: "Yes, basic resume creation is free. We also offer premium templates for a small fee.",
  },
  {
    question: "Can I download my resume in different formats?",
    answer: "Yes, you can download your resume in PDF and DOC formats.",
  },
  {
    question: "How secure is my data on ResumeCraft?",
    answer: "We take data security seriously and use advanced encryption to protect your data.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className='faq_title'>Frequently Asked Questions</h2>
    
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleAnswer(index)}
          >
            {item.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
