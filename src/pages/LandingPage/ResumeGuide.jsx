import React from "react";
import "./ResumeGuide.css"; // Import custom CSS for styling

const ResumeGuide = () => {
    return (
        <div className="resume-guide-container">
            <div className="resume-image">
                {/* Replace src with your image path */}
                <img src="https://resumebuild.com/wp-content/uploads/2024/05/Screen-Shot-2023-02-06-at-8.46.04-AM-600x302-1.webp" alt="Resume preview" />
            </div>
            <div className="resume-steps">
                <h2>HOW TO MAKE A RESUME?</h2>
                <p><em>BUILD A CAPTIVATING RESUME IN MINUTES!</em></p>
                <ul>
                    <li><span className="step-number">1</span> Select your favorite template.</li>
                    <li><span className="step-number">2</span> Add your contact information.</li>
                    <li><span className="step-number">3</span> Fill out your work history and education.</li>
                    <li><span className="step-number">4</span> Select from our hundreds of job descriptions and skill examples, or input your own!</li>
                    <li><span className="step-number">5</span> Review your resume & download it.</li>
                </ul>
            </div>
        </div>
    );
};

export default ResumeGuide;
