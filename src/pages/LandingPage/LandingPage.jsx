import React from "react"
import Home from "./Home"
import ResumeBuilder from "./ResumeBuilder"
import AutoPlay from "./Steps"
import FeaturesGrid from "./FeatureGrid"
import ResumeGuide from "./ResumeGuide"
import FAQ from "../../components/Faq/FAQ"
import Image from "./Image"
import Features from "../../components/Features/Features"
import VideoSection from "../../components/VideoSection/VideoSection"
// import Corosel from './Slider';
const LandingPage = () => {
  return (
    <div>
      <ResumeBuilder />
      <AutoPlay />
      <FeaturesGrid />
      <Image />
      <Features/>
      <VideoSection/>
      <FAQ />
    </div>
  )
}

export default LandingPage
