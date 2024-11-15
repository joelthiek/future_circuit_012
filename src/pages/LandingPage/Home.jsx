import React from "react";
import './Home.css';
//import girlImage from './ResumeCraftGirl.jpg'
const Home = () => {
    return (
        <div className="career-page">
            <div className="photo-container">
                {/* Replace the image URL with the actual image path */}
                <img src="https://t4.ftcdn.net/jpg/06/79/50/91/360_F_679509191_FQW7KbRAaHVkCryRlomSQXOeM354SdJY.jpg" alt="Person" className="profile-photo" />
            </div>
            <div className="content-grid">
                <div className="content-box box1">
                    Unlock a world of opportunities to shape your career journey
                </div>
                <div className="content-box box2">
                    Effortless Application Creation
                </div>
                <div className="content-box box3">
                    Become the standout candidate to potential employers
                </div>
                <div className="content-box box4">
                    Confidence strengthened by Personal Branding
                </div>
                <div className="content-box box5">
                    Streamlined application creation, freeing up more time for your preparation
                </div>
            </div>
        </div>
    );
}
export default Home;