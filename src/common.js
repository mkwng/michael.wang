import React from 'react';
import styled from 'styled-components';

export const Colors = {
  yellow: '#E4BA6E',
  orange: '#FF6E5F',
  dark: '#30333A',
  pink: '#FF3184',
  beige: '#CDC4C3',
  blue: '#0178FF',
  green: '#00D663',
  peach: '#F9B0A9',
  light: '#F2EFEC',
}

export const Breakpoints = {
  desktop: '1280px',
  tablet: '800px',
  mobile: '640px',
  tiny: '480px',
}


export const TextHeadline = (props) => { return ( <TextHeadlineContainer {...props}>{props.children}</TextHeadlineContainer> ) }
const TextHeadlineContainer = styled.span`
  font-family: 'CriteriaCF', Impact, Haettenschweiler, ‘Franklin Gothic Bold’, Charcoal, ‘Helvetica Inserat’, ‘Bitstream Vera Sans Bold’, ‘Arial Black’, sans-serif;
  font-weight: bold;
  font-size: 64px;
  text-transform: lowercase;
  font-display: swap;
  @media only screen and (max-width: ${Breakpoints.desktop}) { font-size: 52px; }
  @media only screen and (max-width: ${Breakpoints.tablet}) { font-size: 48px; }
  @media only screen and (max-width: ${Breakpoints.tiny}) { font-size: 40px; }
`

export const TextSubtitle = (props) => { return ( <TextSubtitleContainer {...props}>{props.children}</TextSubtitleContainer> ) }
const TextSubtitleContainer = styled.span`
  font-family: 'CriteriaCF';
  font-weight: bold;
  font-size: 32px;
  text-transform: lowercase;
  font-display: swap;
  @media only screen and (max-width: ${Breakpoints.desktop}) { font-size: 28px; }
  @media only screen and (max-width: ${Breakpoints.tablet}) { font-size: 24px; }
  @media only screen and (max-width: ${Breakpoints.tiny}) { font-size: 20px; }
`

export const TextPrimaryParagraph = (props) => { return ( <TextPrimaryParagraphContainer {...props}>{props.children}</TextPrimaryParagraphContainer> ) }
const TextPrimaryParagraphContainer = styled.span`
  font-size: 48px;
  @media only screen and (max-width: ${Breakpoints.desktop}) { font-size: 32px; }
  @media only screen and (max-width: ${Breakpoints.tablet}) { font-size: 28px; }
  @media only screen and (max-width: ${Breakpoints.tiny}) { font-size: 24px; }
`

export const TextSecondaryParagraph = (props) => { return ( <TextSecondaryParagraphContainer {...props}>{props.children}</TextSecondaryParagraphContainer> ) }
const TextSecondaryParagraphContainer = styled.span`
  font-size: 32px;
  @media only screen and (max-width: ${Breakpoints.desktop}) { font-size: 28px; }
  @media only screen and (max-width: ${Breakpoints.tablet}) { font-size: 24px; }
  @media only screen and (max-width: ${Breakpoints.tiny}) { font-size: 20px; }
`

export const BigButton = (props) => {
  return (
    <BigButtonContainer {...props}>
      <TextSubtitle>{props.children}</TextSubtitle>
    </BigButtonContainer>
  )
}
const BigButtonContainer = styled.a`
  background: ${Colors.green};
  border: 8px solid ${Colors.dark};
  border-radius: 100px;
  padding: 32px 64px;
  display: inline-block;
  margin: 0 auto;
  text-decoration: none;
`