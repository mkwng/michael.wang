import React from "react";
import styled from 'styled-components';
import { Colors, Breakpoints, TextHeadline, TextPrimaryParagraph, BigButton } from '../common.js'

const CaseStudy = (props) => {
  return (
    <CaseStudyContainer {...props}>
      <div style={{marginBottom: '32px'}}>{props.children}</div>
      <h2 style={{marginBottom: '32px', maxWidth: '62.5%'}}><TextHeadline>{props.title}</TextHeadline></h2>
      <div style={{marginBottom: '32px'}}>{props.image}</div>
      <p style={{marginBottom: '32px'}}><TextPrimaryParagraph>{props.description}</TextPrimaryParagraph></p>
      <BigButton 
        style={{
          backgroundColor: props.ctaLink ? props.accent : Colors.beige,
          pointerEvents: props.ctaLink ? 'auto' : 'none',
        }} 
        href={props.ctaLink} 
        target="_blank"
      >
          {props.ctaText}
      </BigButton>
    </CaseStudyContainer>
  )
}
const CaseStudyContainer = styled.div`
  padding: 128px;
  border-bottom: 8px solid ${Colors.dark};
  background: ${Colors.light};

  @media only screen and (max-width: ${Breakpoints.desktop}) { padding: 64px; }
  @media only screen and (max-width: ${Breakpoints.tiny}) { padding: 64px 32px; }
`

export default CaseStudy;