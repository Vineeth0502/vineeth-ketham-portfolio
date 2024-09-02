import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const Stat = styled.div`
  text-align: center;

  h2 {
    font-size: 48px;
    color: #00bfa6; /* Use a color that stands out */
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #333;
  }
`;

const StatisticsSection = () => {
  return (
    <StatsContainer>
      <Stat>
        <h2>10+</h2>
        <p>Projects Completed</p>
      </Stat>
      <Stat>
        <h2>1+</h2>
        <p>Experience</p>
      </Stat>
      <Stat>
        <h2>3</h2>
        <p>Certifications Earned</p>
      </Stat>
    </StatsContainer>
  );
};

export default StatisticsSection;
