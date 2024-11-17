
import React from 'react';
import './VideoSection.css';

import videoImage from "../../assets/images/rb_2770.png"

const VideoSection = () => {
    const handleClick = () => {
        window.open('https://youtu.be/ctNLcUd9Tl8?si=tN2z3RHVyvawzi0I', '_blank');
    };

    return (
        <div className="video-section">
            <div className="video-content">
                <div className="video-thumbnail">
                    <img src={videoImage} alt="Video Thumbnail" />
                </div>
                <div className="video-text">
                    <h2>Recruiters Love Our Resume Craft.</h2>
                    <p>The video is less than 5 minutes <br />
                    Watch Now
                    </p>
                    <button onClick={handleClick} className="play-button">
                        Play Video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
