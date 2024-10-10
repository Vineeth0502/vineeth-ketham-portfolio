import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: white;
  position: relative;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 320px) {
    height: 50vh;
  }
  @media (min-width: 320px, max-width: 375px) {
    height: 60vh;
  }
  
  @media (max-width: 425px) {
    height: 65vh;

  }
  
  @media (max-width:768px) {
    height: 70vh;

  }
`;

const BackgroundText = styled.h1`
  font-size: 160px;
  font-weight: 1200;
  color: rgba(255, 255, 255, 0.15); 
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
  z-index: 2; 

  @media (max-width: 1024px) {
    font-size: 100px;
    top: 10%;
  }

  @media (max-width: 768px) {
    font-size: 80px;
    top: 14%;
  }

  @media (min-width: 375px) and (max-width: 425px) {
    font-size: 42px;
    top: 13%;
  }

  @media (min-width: 325px) and (max-width: 375px) { 
    font-size: 38px;
    top: 12%;
  }

  @media (max-width: 320px) {
    font-size: 34px;
    top: 12%;
  }
`;


const Image = styled.img`
  width: 38%;
  height: 68%;
  max-height: 600px; 
  border: 5px solid white;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  object-fit: cover; 

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 70%;
    height: 60%;
  }

  @media (max-width: 768px) {
    width: 60%;
    height: 50%;
  }

  @media (max-width: 425px) {
    width: 70%;
    height: 40%;
  }

  @media (min-width: 320px, max-width: 375px) {
    width: 60%;
    height: 35%;
  }

  @media (max-width: 320px) {
    width: 50%;
    height: 30%;
  }
`;

const Role = styled.div`
  font-size: 40px;
  text-align: center;
  margin-top: 30px;
  z-index: 3;

  p {
    margin: 1px 0;
    font-weight: 600;
    font-family: 'Roboto', sans-serif; 
  }

  .about-me {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    font-size: 32px;

    .about-me {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    font-size: 28px;

    .about-me {
      font-size: 14px;
    }
  }

  @media (max-width: 425px) {
    font-size: 22px;

    .about-me {
      font-size: 12px;
    }
  }

  @media (min-width: 320px, max-width: 375px) {
    font-size: 18px;

    .about-me {
      font-size: 10px;
    }
  }

  @media (max-width: 320px) {
    font-size: 16px;

    .about-me {
      font-size: 9px;
    }
  }
`;

const MainContent = () => {
  return (
    <MainContainer>
      <BackgroundText>Vineeth Ketham</BackgroundText>
      <Image src="pic.heic" alt="Main" />
      <Role>
        <p className="about-me">ABOUT ME</p>
        <p>Full-Stack Developer</p>
        <p>Machine Learning & AI Enthusiast</p>
      </Role>
    </MainContainer>
  );
};

export default MainContent;