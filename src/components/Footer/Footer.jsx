import React from "react";
import './Footer.css'
import styled from "styled-components";


const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 100px;
  background-color: #282c34;
  color: white;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
  }
`;

const FooterSection = styled.div`
  margin: 20px 0;
  
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const FooterTitle = styled.h3`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
  display: block;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Sobre Nós</FooterTitle>
          <p>Nós somos uma empresa dedicada a fornecer as melhores soluções para nossos clientes.</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Links Úteis</FooterTitle>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#services">Serviços</FooterLink>
          <FooterLink href="#contact">Contato</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <p>Email: joaovictorferrari4@gmail.com</p>
          <p>Telefone: (11) 91004-8196</p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;