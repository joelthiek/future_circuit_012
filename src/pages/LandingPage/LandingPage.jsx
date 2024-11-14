import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import ResumeBuilder from './ResumeBuilder';
const LandingPage = () => {
  return (
    <div>
      Landing Page
      <Navbar />
      <ResumeBuilder />
      <Home />
    </div>
  )
}

export default LandingPage
