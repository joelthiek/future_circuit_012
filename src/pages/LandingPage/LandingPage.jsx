import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import ResumeBuilder from './ResumeBuilder';
import AutoPlay from './AutoPlay';
import FeaturesGrid from './FeatureGrid';
import ResumeGuide from './ResumeGuide';
import Image from './Image';
// import Corosel from './Slider';
const LandingPage = () => {
  return (
    <div>
      Landing Page
      <Navbar />
      <ResumeBuilder />
      <AutoPlay />
      <Home />
      <FeaturesGrid />
      <ResumeGuide />
      <Image />
      {/* <Corosel /> */}
    </div>
  )
}

export default LandingPage
