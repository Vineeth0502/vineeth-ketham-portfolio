import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

const SectionContainer = styled.div`
  padding: 80px 20px;
  background-color: black; /* Black background to match your website's theme */
  color: white; /* White text color */
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 50px;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionCard = styled.div`
  background-color: white;
  color: black;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 800px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2); /* Slightly increase the shadow on hover */
    transform: translateY(-5px); /* Lift the card slightly on hover */
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Question = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
`;

const Answer = styled.p`
  font-size: 18px;
  margin: 10px 0 0;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')}; /* Adjust based on your content */
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const Icon = styled.div`
  font-size: 20px;
`;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer>
      <Title>Curious Minds Ask</Title>
      <FAQContainer>
        <QuestionCard onClick={() => toggleFAQ(0)}>
          <QuestionHeader>
            <Question>What projects have you worked on?</Question>
            <Icon>{openIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}</Icon>
          </QuestionHeader>
          <Answer isOpen={openIndex === 0}>
            I’ve tackled AI assistants, MERN Stack Applications, and chat apps!
          </Answer>
        </QuestionCard>
        <QuestionCard onClick={() => toggleFAQ(1)}>
          <QuestionHeader>
            <Question>What skills do you possess?</Question>
            <Icon>{openIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}</Icon>
          </QuestionHeader>
          <Answer isOpen={openIndex === 1}>
            I’m a wizard in Python, JavaScript, and more!
          </Answer>
        </QuestionCard>
        <QuestionCard onClick={() => toggleFAQ(2)}>
          <QuestionHeader>
            <Question>Where did you study?</Question>
            <Icon>{openIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}</Icon>
          </QuestionHeader>
          <Answer isOpen={openIndex === 2}>
            I studied at Saint Louis University where I honed my skills in tech.
          </Answer>
        </QuestionCard>
        <QuestionCard onClick={() => toggleFAQ(3)}>
          <QuestionHeader>
            <Question>What certifications do you hold?</Question>
            <Icon>{openIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}</Icon>
          </QuestionHeader>
          <Answer isOpen={openIndex === 3}>
            Certified in blockchain and hackathon leadership!
          </Answer>
        </QuestionCard>
        <QuestionCard onClick={() => toggleFAQ(4)}>
          <QuestionHeader>
            <Question>How can I contact you?</Question>
            <Icon>{openIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}</Icon>
          </QuestionHeader>
          <Answer isOpen={openIndex === 4}>
            Slide into my DMs or email me!
          </Answer>
        </QuestionCard>
      </FAQContainer>
    </SectionContainer>
  );
};

export default FAQSection;
