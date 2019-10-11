import React from "react"
import styled from "styled-components"
import ILink from "../components/a-link"

const Footer = () => {
  return (
    <Container>
      <FooterRow>
          <SocialLink href="mailto:franciscoamado@live.com.pt" target="_blank" className="btn-social">👋🏻</SocialLink>
      </FooterRow>
      <FooterRow>
        <SocialLink href="https://twitter.com/franciscosamado" target="_blank" className="social"><strong>Twitter.</strong></SocialLink>
        <SocialLink href="https://github.com/FranciscoAmado" target="_blank" className="social"><strong>GitHub.</strong></SocialLink>
        <SocialLink href="https://www.linkedin.com/in/franciscoamado" target="_blank" className="social"><strong>LinkedIn.</strong></SocialLink>
        <SocialLink href="resume/resume.pdf" target="_blank" className="social"><strong>Resume.</strong></SocialLink>
        {/* <SocialLink><ILink to="/blog/"><strong>Blog.</strong></ILink></SocialLink> */}
      </FooterRow>
  </Container>
  );
};

const Container = styled.footer`
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 0;
`

const FooterRow = styled.div`
  display: block;
  margin-bottom: 10px;
  text-align: center;
`

const SocialLink = styled.a`
  font-family: "Consolas", Helvetica, Arial, sans-serif;
  margin-bottom: 0;
  margin-right: .75rem;
  color: #323232;
  text-align: center;
  font-size: 24px;
  background-color: transparent;
  text-decoration: none !important;
`

export default Footer
