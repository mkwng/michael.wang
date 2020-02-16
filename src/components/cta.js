import React from "react";
import styled from 'styled-components';
import { Colors, Breakpoints, TextSubtitle } from '../common.js'

const Cta = () => {
  return (
    <CtaContainer>
      <svg 
        width="215" 
        height="215" 
        viewBox="0 0 215 215" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M107.5 6.47442L125.834 29.8091L127.686 32.1658L130.468 31.0506L158.013 20.0093L162.223 49.3847L162.648 52.3515L165.615 52.7767L194.991 56.9872L183.949 84.5323L182.834 87.3142L185.191 89.1659L208.526 107.5L185.191 125.834L182.834 127.686L183.949 130.468L194.991 158.013L165.615 162.223L162.648 162.648L162.223 165.615L158.013 194.991L130.468 183.949L127.686 182.834L125.834 185.191L107.5 208.526L89.1659 185.191L87.3142 182.834L84.5323 183.949L56.9872 194.991L52.7767 165.615L52.3515 162.648L49.3847 162.223L20.0093 158.013L31.0506 130.468L32.1658 127.686L29.8091 125.834L6.47442 107.5L29.8091 89.1659L32.1658 87.3142L31.0506 84.5323L20.0093 56.9872L49.3847 52.7767L52.3515 52.3515L52.7767 49.3847L56.9872 20.0093L84.5323 31.0506L87.3142 32.1658L89.1659 29.8091L107.5 6.47442Z" 
          fill={Colors.green} 
          stroke={Colors.dark} 
          strokeWidth="8"
        />
      </svg>
      <a href="#"><TextSubtitle>Get in touch now!</TextSubtitle></a>
    </CtaContainer>
  )
}
const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 64px;
  width: 300px;
  height: 300px;
  margin-top: -112px;
  transform: rotate(30deg);
  @media only screen and (max-width: ${Breakpoints.desktop}) { 
    width: 215px;
    height: 215px;
  }
  @media only screen and (max-width: ${Breakpoints.tiny}) { 
    width: 160px;
    height: 160px;
  }

  svg {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    transition: transform 500ms;
  }
  a {
    text-decoration: none;
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 64px;
    @media only screen and (max-width: ${Breakpoints.desktop}) { padding: 48px; }
  }

  &:hover {
    svg {transform:rotate(90deg);}
  }
  
`

export default Cta;