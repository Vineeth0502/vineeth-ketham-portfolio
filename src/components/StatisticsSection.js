import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 20px;

  /* Responsive layout */
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 30px 10px;
  }
`;

const Stat = styled.div`
  text-align: center;

  h2 {
    font-size: 48px;
    color: #00bfa6;
    margin-bottom: 10px;

    /* Responsive font sizes */
    @media (max-width: 992px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 36px;
    }
    @media (max-width: 576px) {
      font-size: 32px;
    }
    @media (max-width: 400px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    color: #333;

    /* Responsive font sizes */
    @media (max-width: 992px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 576px) {
      font-size: 12px;
    }
    @media (max-width: 400px) {
      font-size: 10px;
    }
  }
`;

const StatisticsSection = () => {
  return (
    <StatsContainer>
      <Stat>
        <h2>15+</h2>
        <p>Projects Completed</p>
      </Stat>
      <Stat>
        <h2>3+</h2>
        <p>Years of Experience</p>
      </Stat>
      <Stat>
        <h2>3</h2>
        <p>Certifications Earned</p>
      </Stat>
    </StatsContainer>
  );
};

export default StatisticsSection;
