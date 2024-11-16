import React from "react";
import './Steps.css';
const AutoPlay = () => {
    return (
        <>
            <div className="hero-image">
                <div className="hero-text">
                    <h1 id="head1">3 EASY STEPS TO CREATE YOUR PERFECT RESUME</h1>
                    <div id="steps">
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/7656/7656274.png" className="step_img" />
                            <h3>CHOOSE YOUR
                                RESUME TEMPLATE</h3>
                            <br />
                            <p>Our professional resume templates are designed strictly following all industry guidelines and best practices that employers look for.</p>
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/473/473351.png" className="step_img" />
                            <h3>SHOW WHAT YOU'RE MADE OF</h3>
                            <br />
                            <p>Not finding the right words to showcase yourself? We´ve added thousands of pre-written examples and resume samples. As easy as clicking.</p>
                            <br />
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/9502/9502265.png" className="step_img" />
                            <h3>DOWNLOAD
                                YOUR RESUME</h3>
                            <br />
                            <p>Start impressing employers. Download your awesome resume and land the job you are looking for, effortlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default AutoPlay;