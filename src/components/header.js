import React from "react";
import styled from 'styled-components';
import HeaderImage from '../../static/header@3072.png';
import { Colors, Breakpoints, TextHeadline, TextSubtitle } from '../common.js'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <h1><TextHeadline>Michael Wang* wants to design with you.</TextHeadline></h1>
        <p style={{fontSize: '24px', marginTop: "16px", color: Colors.beige}}>*a digital product designer</p>
        <ChineseName>王理棟</ChineseName>
      </HeaderTitleContainer>
      <HeaderIllustrationContainer>
        <img src={HeaderImage} alt='Header image'/>
        <LastUpdated><TextSubtitle>Last updated Feb 2020</TextSubtitle></LastUpdated>
      </HeaderIllustrationContainer>
    </HeaderContainer>
  )
}
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  border-bottom: 8px solid ${Colors.dark};
  height: 50vw;
  max-height: 90vh;
  min-height: 66vh;
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
const HeaderIllustrationContainer = styled.div`
  width: 50%;
  align-self: stretch;
  /* background: ${Colors.beige};  */
  position: relative;
  background: ${Colors.beige};
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: ${Breakpoints.mobile}) { 
    width: 100%; 
    height: 100vw;
  }
`
const HeaderTitleContainer = styled.div`
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
const ChineseName = styled.div`
  position: absolute;
  background: ${Colors.beige};
  padding: 4px 8px;
  border: 8px solid ${Colors.dark};
  border-bottom: 0px;
  left: 0;
  bottom: 0;
  color: ${Colors.dark};
  font-weight: bold;
  font-size: 32px;
  @media only screen and (max-width: ${Breakpoints.mobile}) { border-bottom: 8px solid ${Colors.dark}; }
`
const LastUpdated = styled.div`
  background: ${Colors.pink};
  position: absolute;
  padding: 8px 16px;
  border: 8px solid ${Colors.dark};
  left: 0;
  top: 0;
  transform-origin: bottom left;
  transform: rotate(90deg) ;
`

export default Header;