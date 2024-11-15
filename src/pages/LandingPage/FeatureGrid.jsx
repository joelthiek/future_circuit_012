import React from 'react';
import './FeatureGrid.css'; // Import your CSS file for styling

const FeaturesGrid = () => {
    const features = [
        {
            icon: '📄', // Replace with an icon component or image
            title: 'Customize with templates and themes!',
            text: 'Customise with templates and themes!',
        },
        {
            icon: '🚀',
            title: 'Simple interface that helps you build quickly!',
            text: 'Simple interface that helps you build quickly!',
        },
        {
            icon: '✨',
            title: 'sign up needed – go straight to building!',
            text: 'sign up needed – go straight to building!',
        },
        {
            icon: '🔒',
            title: 'Your data never leaves your device',
            text: 'Your data never leaves your device',
        },
    ];

    return (
        <div className="features-grid">
            {features.map((feature, index) => (
                <div key={index} className="feature-card">
                    <div className="icon">{feature.icon}</div>
                    <p className="feature-text">
                        <strong>{feature.title}</strong>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FeaturesGrid;
