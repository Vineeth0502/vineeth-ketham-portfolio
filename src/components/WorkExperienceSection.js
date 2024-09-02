import React, { useRef, useEffect } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './WorkExperienceSection.css';

const WorkExperienceSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section-container');
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
      const imageHeight = imageRef.current.clientHeight;
      const windowHeight = window.innerHeight;
      const scrollStartOffset = sectionHeight * 0.2; 
      const maxScroll = sectionHeight + windowHeight - imageHeight;
  
      if (imageRef.current) {
        let translateYValue = 0;
  
        if (sectionTop < scrollStartOffset) {
          translateYValue = Math.max(
            Math.min(maxScroll, -sectionTop + scrollStartOffset),
            0
          );
        } else {
          translateYValue = 0; 
        }
  
        imageRef.current.style.transform = `translateY(${translateYValue}px)`;
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className="section-container">
      <div className="parallax-background"></div>
      <div className="content-container">
        <div className="left-side">
          <div className="image-container">
            <div className="rope-line"></div>
            <img
              ref={imageRef}
              src="pic2.jpg"
              alt="Work Experience"
              className="scroll-image"
            />
          </div>
        </div>
        <div className="right-side">
          <h2 id= "workExperienceSection" className="section-title">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-card">
              <div className="card-header">
                <FaBriefcase className="timeline-icon" />
                <h3>Machine Learning Researcher</h3>
              </div>
              <h4>Saint Louis University – Saint Louis, MO</h4>
              <p>Feb 2024 - Jun 2024</p>
            </div>
            <div className="timeline-card">
              <div className="card-header">
                <FaBriefcase className="timeline-icon" />
                <h3>Full Stack Developer Intern</h3>
              </div>
              <h4>ThePaperBrains – Hyderabad, IND</h4>
              <p>Feb 2023 - May 2023</p>
            </div>
            <div className="timeline-card">
              <div className="card-header">
                <FaBriefcase className="timeline-icon" />
                <h3>Junior Associate Software Engineer Intern</h3>
              </div>
              <h4>DigitalZap – Hyderabad, IND</h4>
              <p>Apr 2021 - Jul 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
