import React from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  height: 100vh;
  background-image: url('${process.env.PUBLIC_URL}/scroll_image.jpeg'); 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 36px;
  text-align: center;
  z-index: 2;
`;

const ParallaxSection = () => {
  return (
    <ParallaxContainer>
      <OverlayText>
        {/* Add any text or content here */}
      </OverlayText>
    </ParallaxContainer>
  );
};

export default ParallaxSection;
