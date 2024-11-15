import React from 'react';
import './FeatureGrid.css'; // Import your CSS file for styling

const FeaturesGrid = () => {
    const features = [
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/9119/9119108.png', // Replace with an icon component or image
            title: 'Easy online resume builder',
            text: 'Create an awesome resume in minutes, without leaving your web browser.',
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/4019/4019999.png', // Replace with an icon component or image
            title: 'Your data never leaves your device',
            text: 'Your data never leaves your device',
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/3270/3270865.png',
            title: 'Your data is safe',
            text: 'Your data is kept private and protected by strong 256-bit encryption.',
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/1091/1091007.png',
            title: 'Resume options',
            text: 'Download your resume in pdf format.',
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
            title: 'Optimized resumes',
            text: 'Formats and designs are optimized for resume-filtering algorithms. Ensure humans see your application!',
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/4133/4133274.png',
            title: 'Approved templates',
            text: 'Professionally-designed resume templates and examples. Just edit and download in 5 minutes.',
        },



    ];

    return (
        <div>
            <h1 className='feature_head'>Features designed to help you
            </h1>
            <h1 className='feature_head'>you win your dream job.
            </h1>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className='icon_image'>
                            <img src={feature.icon} className='feature-icon' />
                        </div>
                        <div className='feature_content'> <h2>{feature.title}</h2>
                            <p className="feature-text">
                                <strong>{feature.text}</strong>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );


    // return (
    //     <div>

    //     </div>
    // );
};

export default FeaturesGrid;
