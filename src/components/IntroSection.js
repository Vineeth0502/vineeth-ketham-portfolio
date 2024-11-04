import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  padding: 50px;
  height: 100vh;
  background-color: black;
  color: white;
  font-family: 'Montserrat', sans-serif;

  /* Adjust layout for smaller screens */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background-color: black;
  transition: flex 0.3s ease;

  &:hover {
    flex: 1.1;
  }

  /* Adjust padding for smaller screens */
  @media (max-width: 992px) {
    padding: 30px;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 576px) {
    padding: 15px;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

const RightSide = styled.div`
  flex: 1;
  background-image: url('${process.env.PUBLIC_URL}/profilepic.jpg'); /* Replace with your actual image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: flex 0.3s ease;

  &:hover {
    flex: 1.1;
  }

  /* Adjust height for smaller screens */
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 576px) {
    height: 250px;
  }
  @media (max-width: 400px) {
    height: 200px;
  }
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  text-transform: uppercase;
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  /* Responsive font sizes */
  @media (max-width: 992px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const Points = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  opacity: 0;
  animation: fadeIn 2s ease-out forwards;
  animation-delay: 1s;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  li {
    margin-bottom: 20px;
  }

  /* Responsive font sizes */
  @media (max-width: 992px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    li {
      margin-bottom: 15px;
    }
  }
  @media (max-width: 400px) {
    font-size: 10px;
    li {
      margin-bottom: 10px;
    }
  }
`;

const SplitScreenIntro = () => {
  return (
    <SectionContainer id="about">
      <LeftSide>
        <Heading>Meet Your Tech Wizard</Heading>
        <Points>
          <li>Welcome to my digital lair! Here, I conjure up magic with machine learning, full-stack development, and software engineering. My portfolio is not just a collection of projects; it’s a testament to my relentless pursuit of innovation and excellence.</li>
          <li>Currently, I’m on a quest for knowledge, pursuing a Master’s in Computer Science at Saint Louis University. With a sprinkle of humor and a dash of sarcasm, I aim to impress potential employers and collaborators with my skills and achievements.</li>
          <li>From AI-powered virtual assistants that can chat your ear off to real-time chat applications that keep you connected, I’ve dabbled in it all. My community-focused platforms are designed to make the world a better place, one line of code at a time.</li>
        </Points>
      </LeftSide>
      <RightSide />
    </SectionContainer>
  );
};

export default SplitScreenIntro;
