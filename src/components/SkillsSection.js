import React, { useEffect } from 'react';
import './SkillsSection.css';
import { FaArrowRight } from 'react-icons/fa';

const SkillsSection = () => {
  useEffect(() => {
    if (window.TagCanvas) {
      try {
        window.TagCanvas.Start('myCanvas', 'tags', {
          textColour: '#00eaff',
          outlineColour: '#ff0080',
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          freezeActive: true,
          shuffleTags: true,
          shape: 'sphere',
          zoom: 1.2,
          wheelZoom: false,
          noSelect: true,
          textFont: null,
          textHeight: 25,
          pinchZoom: true,
        });
      } catch (e) {
        console.log('Canvas error:', e);
      }
    } else {
      console.error('TagCanvas.js failed to load or is not available.');
    }
  }, []);

  return (
    <div className="skills-section">
      <div className="content">
        <div className="skills-header">
          <h1>Skills</h1>
          <div className="header-lines">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
            <div className="line line4"></div>
          </div>
        </div>
        <p className="skills-description">
          My skills are wide-ranging, spanning across multiple creative and technical disciplines. 
          I absorb information like a sponge and I'm in constant pursuit of skills that can help 
          develop me into a well-rounded professional.
        </p>
        {/* Download CV Button */}
        <a href="https://sluedu-my.sharepoint.com/:w:/g/personal/vineeth_ketham_slu_edu/EfnP8WwYtexHvDLscc9bIFABlMr3IwkPMVqUcSIF4q7v3A?rtime=IuQIaIX83Eg" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="download-cv-btn">
          Download CV <FaArrowRight className="arrow-icon" />
        </a>
      </div>
      <div className="globe-container">
        <canvas id="myCanvas" width="500" height="500">
          <p>Anything in here will be replaced on browsers that support the canvas element.</p>
        </canvas>
        <div id="tags">
          <ul>
            <li><a href="#">Python</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">SQL</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">React.js</a></li>
            <li><a href="#">AngularJS</a></li>
            <li><a href="#">Node.js</a></li>
            <li><a href="#">Express.js</a></li>
            <li><a href="#">Django</a></li>
            <li><a href="#">Bootstrap</a></li>
            <li><a href="#">MongoDB</a></li>
            <li><a href="#">MySQL</a></li>
            <li><a href="#">Google Cloud Platform</a></li>
            <li><a href="#">Git</a></li>
            <li><a href="#">Docker</a></li>
            <li><a href="#">Algorithm Development</a></li>
            <li><a href="#">Responsive Design</a></li>
            <li><a href="#">UI/UX Design Principles</a></li>
            <li><a href="#">Full-Stack Development</a></li>
            <li><a href="#">Testing</a></li>
            <li><a href="#">Object-Oriented Programming</a></li>
            <li><a href="#">Data Structures</a></li>
            <li><a href="#">Agile Methodologies</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
