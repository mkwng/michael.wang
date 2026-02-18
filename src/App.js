import React from "react";
import styled from 'styled-components';
import { Colors, Breakpoints } from './common.js'
import HeaderImage3072 from '../static/header@3072.png';
import HeaderImage2304 from '../static/header@2304.png';
import HeaderImage1536 from '../static/header@1536.png';
import HeaderImage768 from '../static/header@768.png';
import HeaderImage461 from '../static/header@461.png';
import HeaderImage307 from '../static/header@307.png';
import HeaderImage154 from '../static/header@154.png';
import './main.css';

export default () => (
  <Page>
    <Illustration>
      <img
        src={HeaderImage1536}
        srcSet={`${HeaderImage3072} 3072w, ${HeaderImage2304} 2304w, ${HeaderImage1536} 1536w, ${HeaderImage768} 768w, ${HeaderImage461} 461w, ${HeaderImage307} 307w, ${HeaderImage154} 154w`}
        sizes="(max-width: 640px) 100vw, 50vw"
        alt="Illustration of Michael Wang"
      />
    </Illustration>
    <Content>
      <Name>Michael Wang</Name>
      <ChineseName>王理棟</ChineseName>
      <Bio>
        Digital product designer since 2009. Based in Oakland. Currently designing at{' '}
        <a href="https://www.anthropic.com" target="_blank">Anthropic</a>.
      </Bio>
      <Links>
        <a href="mailto:hi@michael.wang">Email</a>
        <Dot />
        <a href="https://twitter.com/mkwng" target="_blank">Twitter</a>
        <Dot />
        <a href="https://linkedin.com/in/mkwng" target="_blank">LinkedIn</a>
        <Dot />
        <a href="https://github.com/mkwng" target="_blank">GitHub</a>
      </Links>
    </Content>
  </Page>
);

const Dot = () => <DotSpan>&middot;</DotSpan>;

const DotSpan = styled.span`
  margin: 0 8px;
  color: ${Colors.dark};
  opacity: 0.25;
`;

const Page = styled.div`
  background: ${Colors.beige};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 48px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    padding: 32px 40px;
  }
  @media only screen and (max-width: ${Breakpoints.mobile}) {
    padding: 24px 28px 0;
    flex: none;
    text-align: center;
    align-items: center;
  }
`;

const Name = styled.h1`
  font-size: 18px;
  font-weight: normal;
  color: ${Colors.dark};
  line-height: 1;

  @media only screen and (max-width: ${Breakpoints.tiny}) { font-size: 16px; }
`;

const ChineseName = styled.span`
  font-size: 13px;
  color: ${Colors.dark};
  opacity: 0.35;
  margin-top: 6px;
  letter-spacing: 3px;

  @media only screen and (max-width: ${Breakpoints.tiny}) { font-size: 11px; }
`;

const Bio = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${Colors.dark};
  margin-top: 20px;
  max-width: 320px;
  opacity: 0.6;

  a {
    color: ${Colors.dark};
    text-decoration-color: ${Colors.dark};
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    &:hover {
      opacity: 0.6;
    }
  }

  @media only screen and (max-width: ${Breakpoints.tiny}) { font-size: 13px; }
`;

const Links = styled.nav`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a {
    font-size: 12px;
    color: ${Colors.dark};
    text-decoration: none;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: normal;
    opacity: 0.4;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }

  @media only screen and (max-width: ${Breakpoints.tiny}) {
    a { font-size: 11px; }
  }
`;

const Illustration = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: ${Breakpoints.mobile}) {
    flex: 1;
    width: 100%;
    min-height: 0;
    img {
      max-height: 45vh;
    }
  }
`;
