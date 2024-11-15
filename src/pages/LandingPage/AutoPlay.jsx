import React from "react";
import './AutoPlay.css';
const AutoPlay = () => {
    return (
        <>
            <div className="hero-image">
                <div className="hero-text">
                    <h1 id="head1">3 EASY STEPS TO CREATE YOUR PERFECT RESUME</h1>
                    <div id="steps">
                        <div>
                            <img src="https://resumebuild.com/wp-content/uploads/2024/05/icon-cv-1.webp" className="step_img" />
                            <h3>CHOOSE YOUR
                                RESUME TEMPLATE</h3>
                            <br />
                            <p>Our professional resume templates are designed strictly following all industry guidelines and best practices that employers look for.</p>
                        </div>
                        <div>
                            <img src="https://resumebuild.com/wp-content/uploads/2024/05/icon-pen.webp" className="step_img" />
                            <h3>SHOW WHAT YOU'RE MADE OF</h3>
                            <br />
                            <p>Not finding the right words to showcase yourself? We´ve added thousands of pre-written examples and resume samples. As easy as clicking.</p>
                            <br />
                        </div>
                        <div>
                            <img src="https://resumebuild.com/wp-content/uploads/2024/05/icon-download.webp" className="step_img" />
                            <h3>DOWNLOAD
                                YOUR RESUME</h3>
                            <br />
                            <p>Start impressing employers. Download your awesome resume and land the job you are looking for, effortlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="template">
                <div >
                    <h2>
                        <b>PROFESSIONAL</b>
                        RESUME TEMPLATES
                    </h2>

                </div>
                <div>
                    Choose from 15+ tailored-built templates that have landed thousands of
                    <br />
                    people like you the jobs they were dreaming of.
                </div>
            </div>
        </>

    )
}
export default AutoPlay;