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
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  a {
    color: white;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    margin-bottom: 15px;
    position: relative;
    overflow: hidden;
    cursor: pointer; /* Cursor now pointing */
    transition: color 0.3s ease;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: #00c3ff;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      color: #00c3ff; 
    }

    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    margin-left: 20px;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #00c3ff; 
    }
  }
`;

const BackgroundText = styled.h1`
  font-size: 80px;
  font-weight: 1800;
  color: rgba(255, 255, 255, 0.15); 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
  z-index: 2; 
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
              ABOUT
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              CONTACT
            </Link>
          </Menu>
          <BackgroundText>Vineeth Ketham</BackgroundText>
        </LeftSide>
        <RightSide>
          <SocialIcons>
            <a href="https://www.linkedin.com/in/vineethketham" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:kethamvineeth@gmail.com"><FaEnvelope /></a>
          </SocialIcons>
        </RightSide>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
