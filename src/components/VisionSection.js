import React from 'react'
import '../App.css';
import './HeroSection.css';

function VisionSection() {
  return (
    <div className="hero-container">
        <video src='https://videos-travel-blog.s3.us-east-2.amazonaws.com/VisionVid.mp4' autoPlay loop muted />
        <p>When I first moved to the U.S. in 2012 I was fascinated </p>
        <p>by this new country and environment I was placed in.</p>
        <p>Ever since then, my family has taken vacations</p>
        <p>(mostly road trips) throughout the U.S.</p>
        <p>In conclusion, I just wanted to share the wonderful</p>
        <p>experiences I've had in this beautiful country that I call home.</p>
    </div>
  )
}

export default VisionSection
