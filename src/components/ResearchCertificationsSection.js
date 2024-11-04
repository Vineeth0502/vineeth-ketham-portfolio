import React from 'react';
import styled from 'styled-components';
import { FaFileAlt, FaCertificate } from 'react-icons/fa';

const SectionContainer = styled.div`
  padding: 80px 20px;
  background-color: #121212;
  color: white;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }

  @media (max-width: 576px) {
    padding: 40px 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;

  &::after {
    content: '';
    width: 100px;
    height: 4px;
    background-color: #00c3ff;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  font-size: 36px;
  color: #00c3ff;
  margin-right: 15px;

  @media (max-width: 576px) {
    font-size: 30px;
    margin-right: 10px;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const CardDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #d3d3d3;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const Link = styled.a`
  font-size: 18px;
  color: #00c3ff;
  text-decoration: none;
  display: block;
  margin-top: 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const ResearchCertificationsSection = () => {
  const researchPapers = [
    {
      title: 'LEO - Virtual Assistance',
      description: 'Published in the International Journal of Scientific Research in Engineering and Management (IJSREM). This research explores the development and application of virtual assistance technologies, showcasing innovation in artificial intelligence and user interaction.',
      link: 'https://ijsrem.com/download/leo-the-virtual-assistance/',
    },
    // Add more research papers here
  ];

  const certifications = [
    {
      title: 'Blockchain Technology Fundamentals',
      description: 'Completed educational sessions on blockchain technology, exploring decentralized applications, smart contracts, and cryptocurrency mechanisms.',
    },
    {
      title: 'Technical Event Management & Hackathon Leadership',
      description: 'Organized and managed multiple technical events and hackathons as an active member of IEEE, demonstrating leadership and project management skills.',
    },
    {
      title: 'Hackathon Champion',
      description: 'Secured the top position in a competitive hackathon hosted by the IEEE student branch, showcasing innovative thinking and effectively addressing complex technical challenges.',
    },
    // Add more certifications here
  ];

  return (
    <SectionContainer>
      <SectionTitle>Research Papers & Certifications</SectionTitle>
      <CardsContainer>
        {researchPapers.map((paper, index) => (
          <Card key={index}>
            <CardHeader>
              <IconContainer>
                <FaFileAlt />
              </IconContainer>
              <CardTitle>{paper.title}</CardTitle>
            </CardHeader>
            <CardDescription>{paper.description}</CardDescription>
            <Link href={paper.link} target="_blank" rel="noopener noreferrer">
              Read More
            </Link>
          </Card>
        ))}
        {certifications.map((cert, index) => (
          <Card key={index}>
            <CardHeader>
              <IconContainer>
                <FaCertificate />
              </IconContainer>
              <CardTitle>{cert.title}</CardTitle>
            </CardHeader>
            <CardDescription>{cert.description}</CardDescription>
          </Card>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

export default ResearchCertificationsSection;
