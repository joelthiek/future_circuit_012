import React from 'react';
import './Features.css';

import liveContentFeedback from "../../assets/images/liveContentFeedback.png";
import creativeAndProfessionalTemplates from "../../assets/images/creativeAndProfessionalTemplates.png";
import atsFriendly from "../../assets/images/atsFriendly.png";
import editRealTime from "../../assets/images/EditRealTime.png";
import noHiddenFees from "../../assets/images/noHiddenFees.png";




const Features = () => {
  return (
    <div className="features-container">
      <h2 className='features_bottom_title'>Why Use The Resume Craft ?</h2>
      <div className="features-grid_bottom">
        <div className="feature">
          <div className="icon">
            <img src={liveContentFeedback} alt="Live Content Feedback" />
          </div>
          <h3>Live Content Feedback</h3>
          <p>Get real-time feedback to enhance your resume content.</p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src={creativeAndProfessionalTemplates} alt="Creative and Professional Templates" />
          </div>
          <h3>Creative and Professional Templates</h3>
          <p>Find the perfect resume template that suits your style!</p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src={atsFriendly} alt="ATS-Friendly" />
          </div>
          <h3>ATS-Friendly</h3>
          <p>Our templates ensure your resume gets past automated filters.</p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src={editRealTime} alt="ATS-Friendly" />
          </div>
          <h3>Edit Your Resume in Real Time</h3>
          <p>As you edit your resume with our builder, you’ll immediately see the changes applied to your document..</p>
        </div>
       
        <div className="feature">
          <div className="icon">
            <img src={noHiddenFees} alt="No Hidden Fees" />
          </div>
          <h3>NO Hidden Fees</h3>
          <p>Don't waste time on hidden paywalls. Use our builder freely.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
