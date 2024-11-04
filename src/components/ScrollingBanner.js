import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  overflow: hidden;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  border-top: 2px solid white; 
  border-bottom: 2px solid white; 
  padding: 10px 0;
`;

const BannerText = styled.div`
  display: inline-block;
  padding: 20px;
  font-size: 60px; 
  font-weight: 700;
  letter-spacing: 2px; 
  text-transform: uppercase; 
  white-space: nowrap;
  padding-left: 100%; 
  animation: scroll 30s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0); 
    }
    100% {
      transform: translateX(-100%);
    }
  }

  /* Responsive font sizes for different screen widths */
  @media (max-width: 1200px) {
    font-size: 50px;
  }

  @media (max-width: 992px) {
    font-size: 40px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    padding: 10px;
  }

  @media (max-width: 576px) {
    font-size: 25px;
    padding: 5px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
    padding: 3px;
  }
`;

const ScrollingBanner = () => {
  return (
    <BannerContainer>
      <BannerText>
        SPECIALIZED IN AI/ML & WEB DEVELOPMENT • EXPERIENCED IN CREATING SCALABLE APPLICATIONS • FULL-STACK DEVELOPER & MACHINE LEARNING ENTHUSIAST • 
      </BannerText>
    </BannerContainer>
  );
};

export default ScrollingBanner;
