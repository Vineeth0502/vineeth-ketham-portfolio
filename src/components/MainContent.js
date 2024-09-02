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
`;


const Image = styled.img`
  width: 40%;
  top: 200px;
  border: 5px solid white;
  z-index: 1;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
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
`;


const MainContent = () => {
  return (
    <MainContainer>
      <BackgroundText>Vineeth Ketham</BackgroundText>
      <Image src="/main_image.jpg" alt="Main" />
      <Role>
        <p className="about-me">ABOUT ME</p>
        <p>Full-Stack Developer</p>
        <p>Machine Learning & AI Enthusiast</p>
      </Role>
    </MainContainer>
  );
};

export default MainContent;
