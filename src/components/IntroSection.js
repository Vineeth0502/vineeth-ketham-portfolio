import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  padding: 50px;
  height: 100vh;
  background-color: black;
  color: white;
  font-family: 'Montserrat', sans-serif;
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
`;

const RightSide = styled.div`
  flex: 1;
  background-image: url('/profilepic.jpg'); /* Replace with your actual image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: flex 0.3s ease;

  &:hover {
    flex: 1.1;
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
