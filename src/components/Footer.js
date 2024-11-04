import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 40px 20px;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  position: relative;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  flex-wrap: wrap;

  /* For tablets and smaller laptops */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  /* Center align on tablets */
  @media (max-width: 1024px) {
    align-items: center;
  }

  /* For small screens, align everything in a row */
  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: center;
    gap: 15px;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;

  /* Center align on tablets */
  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 20px;
  }

  /* For small screens, align everything in the same row */
  @media (max-width: 480px) {
    margin-top: 0;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: white;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    margin-bottom: 15px;
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #00c3ff;
    }
  }

  /* Horizontal menu for small screens */
  @media (max-width: 480px) {
    flex-direction: row;
    gap: 15px;

    a {
      font-size: 16px;
      margin-bottom: 0;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #00c3ff;
    }
  }

  /* Smaller icons for small screens */
  @media (max-width: 480px) {
    font-size: 20px;
    gap: 15px;
  }
`;

const BackgroundText = styled.h1`
  font-size: 80px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.08);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;

  /* Adjust size for tablets and laptops */
  @media (max-width: 1024px) {
    font-size: 60px;
    color: rgba(255, 255, 255, 0.15);
  }

  /* Hide on small screens */
  @media (max-width: 480px) {
    display: none;
  }
`;

const TopLine = styled.div`
  height: 1px;
  background-color: white;
  opacity: 0.2;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopLine />
      <FooterContent>
        <LeftSide>
          <Menu>
            <Link to="workExperienceSection" smooth={true} duration={500}>
              Work
            </Link>
            <Link to="project" smooth={true} duration={500}>
              Projects
            </Link>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </Menu>
        </LeftSide>
        <BackgroundText>Vineeth Ketham</BackgroundText>
        <RightSide>
          <SocialIcons>
            <a href="https://www.linkedin.com/in/vineethketham" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:kethamvineeth@gmail.com">
              <FaEnvelope />
            </a>
          </SocialIcons>
        </RightSide>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
