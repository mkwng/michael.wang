import React from "react";
import styled from 'styled-components';
import MichaelImage3299 from '../../static/michael@3299.jpg';
import MichaelImage2474 from '../../static/michael@2474.jpg';
import MichaelImage1650 from '../../static/michael@1650.jpg';
import MichaelImage825 from '../../static/michael@825.jpg';
import MichaelImage495 from '../../static/michael@495.jpg';
import MichaelImage330 from '../../static/michael@330.jpg';
import MichaelImage165 from '../../static/michael@165.jpg';
import { Colors, Breakpoints, TextHeadline, TextSubtitle } from '../common.js'

const Footer = (props) => {
  return (
    <FooterContainer {...props}>
      <FooterIllustrationContainer>
        <div style={{
          borderRadius: '9999px',
          overflow: 'hidden',
          width: '256px',
          height: '256px',
          flexGrow: 0,
        }}>
          <img 
            style={{
              width: '100%',
              height: '100%',
              objectFit:'contain',
              maxWidth: '100%',
            }} 
            src={MichaelImage1650} 
            srcSet={`${MichaelImage3299} 3299w, ${MichaelImage2474} 2474w, ${MichaelImage1650} 1650w, ${MichaelImage825} 825w, ${MichaelImage495} 495w, ${MichaelImage330} 330w, ${MichaelImage165} 165w,` }
            sizes='256px'
            alt='Footer image'
          />
        </div>
        <LastUpdated><TextSubtitle>Last updated Feb 2020</TextSubtitle></LastUpdated>
      </FooterIllustrationContainer>
      <FooterTitleContainer>
        <h1><TextHeadline>Let's keep in touch</TextHeadline></h1>
        <p style={{fontSize: '24px', marginTop: "16px", color: Colors.beige}}>
          <a href="mailto:hi@michael.wang">Email</a> • <a href="https://twitter.com/mkwng" target='_blank'>Twitter</a> • <a href="https://read.cv/michael">CV</a> • <a href="https://github.com/mkwng" target='_blank'>Github</a>
        </p>
      </FooterTitleContainer>
    </FooterContainer>
  )
}
const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 8px solid ${Colors.dark};
  height: 45vw;
  max-height: 75vh;
  min-height: 33vh;
  align-items: center;
  div {
    flex-grow: 1;
  }
  a {
    color: ${Colors.beige};
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
  background: ${Colors.orange};
  position: absolute;
  padding: 8px 16px;
  border: 8px solid ${Colors.dark};
  left: 0;
  top: 0;
  transform-origin: bottom left;
  transform: rotate(90deg) ;
`

export default Footer;
