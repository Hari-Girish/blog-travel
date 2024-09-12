import React from 'react';
import '../App.css';
import './HeroSection.css';

function AboutSection() {
    return(
        <div className="hero-container">
            <video src='/videos/AboutMeBack.mp4' autoPlay loop muted />
            <h1>Hari Girish</h1>
                <p>
                    I'm a first year Computer Science student at The Ohio State University
                </p> 

                <img className="img1" alt="idk" src="images/osuimg.jpeg"/>
                <p>
                    I am a member of Ohio State's Mount Leadership Society Scholars Program
                </p>
                <img className="img2" alt="idv" src="images/mountimg.png"/>
                {/* <p>
                    Some of my past programming experiences include: 
                </p>
                <p>    
                    Inspirit AI Scholars Program where we developed a deployable text-based Chatbot 
                </p>
                <img className="img3" alt="ids" src="images/inspirit.png"/>
                <p>
                    Highschool programming classes that involved programming projects in C++, Java, React Native, and JavaScript
                </p> */}
        </div>
    );
}

export default AboutSection;