import React from "react";
import styled from 'styled-components';
import MichaelImage from '../../static/michael@3299.jpg';
import { Colors, Breakpoints, TextHeadline } from '../common.js'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitleContainer>
        <h1><TextHeadline>Let's keep in touch</TextHeadline></h1>
        <p style={{fontSize: '24px', marginTop: "16px", color: Colors.beige}}>
          <a href="mailto:hi@michael.wang">Email</a> • <a href="https://twitter.com/mkwng" target='_blank'>Twitter</a> • <a href="https://linkedin.com/in/mkwng" target='_blank'>LinkedIn</a> • <a href="https://github.com/github" target='_blank'>Github</a>
        </p>
      </FooterTitleContainer>
      <FooterIllustrationContainer>
        <div style={{
          borderRadius: '9999px',
          overflow: 'hidden',
          width: '256px',
          height: '256px',
          flexGrow: 0,
        }}>
          <img style={{
            width: '100%',
            height: '100%',
            objectFit:'contain',
          }} src={MichaelImage} alt='Footer image'/>
        </div>
        <LastUpdated>Last updated Feb 2020</LastUpdated>
      </FooterIllustrationContainer>
    </FooterContainer>
  )
}
const FooterContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  border-bottom: 8px solid ${Colors.dark};
  height: 45vw;
  max-height: 75vh;
  min-height: 33vh;
  align-items: center;
  div {
    flex-grow: 1;
  }
  @media only screen and (max-width: ${Breakpoints.mobile}) { 
    flex-direction: column; 
    height: auto;
    max-height: none;
    min-height: none;
  }
`
const FooterIllustrationContainer = styled.div`
  width: 50%;
  align-self: stretch;
  position: relative;
  background: ${Colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${Breakpoints.mobile}) { 
    width: 100%; 
    height: 100vw;
  }
`
const FooterTitleContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 0 128px;
  text-align: center;
  background: ${Colors.dark}; 
  color: ${Colors.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: ${Breakpoints.desktop}) { padding: 0 64px; }
  @media only screen and (max-width: ${Breakpoints.tiny}) { padding: 0 32px; }

  @media only screen and (max-width: ${Breakpoints.mobile}) { 
    width: 100%; 
    height: 100vw;
  }
`
const LastUpdated = styled.div`
  background: ${Colors.pink};
  position: absolute;
  padding: 8px 16px;
  border: 8px solid ${Colors.dark};
  left: 0;
  top: 50%;
  transform: rotate(90deg) translateX(-50%);
  transform-origin: bottom left;
`

export default Footer;