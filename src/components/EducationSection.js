import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideDownAnimation = css`
  animation: ${slideDown} 0.8s ease-out forwards;
`;

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  overflow: hidden;
`;

const LeftSide = styled.div`
  flex: 65%;
  overflow: hidden;
  position: relative;
  ${({ inView }) => inView && slideDownAnimation};
`;

const RightSide = styled.div`
  flex: 35%;
  display: flex;
  flex-direction: column;
`;

const TopRight = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  ${({ inView }) => inView && css`
    animation: ${slideDown} 0.8s ease-out 0.3s forwards;
  `};
`;

const BottomRight = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  ${({ inView }) => inView && css`
    animation: ${slideDown} 0.8s ease-out 0.6s forwards;
  `};
`;

const ImageCard = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 1.5rem;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

const ImageSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionContainer ref={sectionRef}>
      <LeftSide inView={inView}>
        <ImageCard>
          <Image src="/masters.jpg" alt="Saint Louis University" />
          <Overlay>
            <Title>Saint Louis University</Title>
            <Subtitle>Masters In Computer Science</Subtitle>
          </Overlay>
        </ImageCard>
      </LeftSide>
      <RightSide>
        <TopRight inView={inView}>
          <ImageCard>
            <Image src="/btech.jpg" alt="Nalla Mall Reddy Engineering College" />
            <Overlay>
              <Title>Nalla Mall Reddy Engineering College</Title>
              <Subtitle>Bachelors In Computer Science</Subtitle>
            </Overlay>
          </ImageCard>
        </TopRight>
        <BottomRight inView={inView}>
          <ImageCard>
            <Image src="/intermediate.jpg" alt="Narayana Junior College" />
            <Overlay>
              <Title>Narayana Junior College</Title>
              <Subtitle>Intermediate In MPC</Subtitle>
            </Overlay>
          </ImageCard>
        </BottomRight>
      </RightSide>
    </SectionContainer>
  );
};

export default ImageSection;
