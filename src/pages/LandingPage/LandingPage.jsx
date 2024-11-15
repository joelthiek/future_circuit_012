import React from 'react'
import Home from './Home';
import ResumeBuilder from './ResumeBuilder';
import AutoPlay from './Steps';
import FeaturesGrid from './FeatureGrid';
import ResumeGuide from './ResumeGuide';
import Image from './Image';
// import Corosel from './Slider';
const LandingPage = () => {
  return (
    <div>
      <ResumeBuilder />
      <AutoPlay />

      {/* <Home /> */}

      <FeaturesGrid />
      <Image />

      {/* <ResumeGuide /> */}
      {/* <Corosel /> */}
    </div>
  )
}

export default LandingPage
