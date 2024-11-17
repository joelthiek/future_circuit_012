import React from 'react';
import './ResumeBuilder.css';
import { useNavigate } from 'react-router-dom';
//import resumeImage from './dummyResumeCraft.png'; // Replace with your image path
import Navbar from '../../components/Navbar/Navbar';
const ResumeBuilder = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create-resume')
    }
    return (
        <>
            <Navbar />
            <div className="resume-builder">

                <div className="text-section">
                    <div className='dream'>Secure Your Dream Job</div>
                    <h2 className='head_res'>Create a Professional resume in minutes. Use our Resume templates</h2>
                    <div className='job'>Getting that dream job can seem like an impossible task. We’re here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.
                    </div>
                    <button onClick={handleClick} id="get_start">Get Started</button>
                </div>

                <div className="image-section">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjauN4dGutdoVSfASDbBZka60GMHkI772grDJ3DxRzqjPbMwB-" alt="Resume previews" style={{ height: "300px" }} />
                </div>
            </div>
        </>
    );
};

export default ResumeBuilder;
