import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll'; 
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: black;
  font-family: 'Montserrat', sans-serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer; 

    &:hover {
      color: #f0f0f0;
    }
  }
`;

const SiteTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-right: 190px;
  color: white;
  text-transform: uppercase;
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

const Header = () => {
  return (
    <HeaderContainer>
      <NavLinks>
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
      </NavLinks>
      <SiteTitle>Vineeth Ketham</SiteTitle>
      <SocialIcons>
        <a href="https://www.linkedin.com/in/vineethketham" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:your.email@example.com">
          <FaEnvelope />
        </a>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default Header;
