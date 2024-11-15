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
                            <img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/50011590930/original/AOubwBwCQM6qdvPmtrLkcLPqSXzLBPIcRA.png?1713505080" className="step_img" />
                            <h3>CHOOSE YOUR
                                RESUME TEMPLATE</h3>
                            <br />
                            <p>Our professional resume templates are designed strictly following all industry guidelines and best practices that employers look for.</p>
                        </div>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZ8E3RwHG6F3wAoMOeajNMdHlfNknAiVH9_x4BoUJLPz_7qHlAEgGHmjXeb5B6YoMgdA&usqp=CAU" className="step_img" />
                            <h3>SHOW WHAT YOU'RE MADE OF</h3>
                            <br />
                            <p>Not finding the right words to showcase yourself? We´ve added thousands of pre-written examples and resume samples. As easy as clicking.</p>
                            <br />
                        </div>
                        <div>
                            <img src="https://images.sftcdn.net/images/t_app-icon-m/p/e7e44315-6b67-4402-9719-22b326641f1d/3355331818/gu-ke-guan-li-bo-gu-ke-guan-li-ming-ci-guan-li-logo" className="step_img" />
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