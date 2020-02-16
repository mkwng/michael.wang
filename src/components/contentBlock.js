import React from "react";
import styled from 'styled-components';
import { Colors, Breakpoints } from '../common.js'

const ContentBlock = (props) => {
  return (
    <ContentBlockContainer {...props}>
      {props.children}
    </ContentBlockContainer>
  )
}
const ContentBlockContainer = styled.div`
  padding: 128px;
  border-bottom: 8px solid ${Colors.dark};
  background: ${Colors.light};
  ${ props => props.isCompact && `
    padding: 32px;
    text-align: center;
  `}

  @media only screen and (max-width: ${Breakpoints.desktop}) { padding: 64px; }
  @media only screen and (max-width: ${Breakpoints.tiny}) { padding: 64px 32px; }
`

export default ContentBlock;