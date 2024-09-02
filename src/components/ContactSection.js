import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.div`
  padding: 100px 20px;
  background-color: black; 
  color: white; 
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const ContactTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const ContactInfo = styled.div`
  margin-bottom: 50px;
`;

const ContactItem = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  flex: 1;
  text-align: left;
  font-size: 18px;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  height: 100px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: grey;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: white;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Contact</ContactTitle>
      <ContactInfo>
        <ContactItem>kethamvineeth@gmail.com</ContactItem>
        <ContactItem>(314) 224-2757</ContactItem>
        <ContactItem>1 N Grand Blvd </ContactItem>
        <ContactItem>Saint Louis, MO 63108</ContactItem>
      </ContactInfo>
      <ContactForm action="https://formspree.io/f/mzzpwpoj" method="POST">
        <FormRow>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
        </FormRow>
        <FormRow>
          <FormInput type="text" id="firstName" name="firstName" required placeholder="First Name" />
          <FormInput type="text" id="lastName" name="lastName" required placeholder="Last Name" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="email">Email</FormLabel>
        </FormRow>
        <FormRow>
          <FormInput type="email" id="email" name="email" required placeholder="Email" />
        </FormRow>
        <FormRow>
          <FormTextarea name="message" placeholder="Your Message"></FormTextarea>
        </FormRow>
        <FormRow>
          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </FormRow>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
