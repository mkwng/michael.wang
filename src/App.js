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
    <Content>
      <Name>Michael Wang</Name>
      <ChineseName>王理棟</ChineseName>
      <Bio>
        Digital product designer since 2009. Based in Oakland. Currently designing at{' '}
        <a href="https://www.github.com" target="_blank">GitHub</a>.
      </Bio>
      <Links>
        <a href="mailto:hi@michael.wang">Email</a>
        <Dot />
        <a href="https://twitter.com/mkwng" target="_blank">Twitter</a>
        <Dot />
        <a href="https://read.cv/michael" target="_blank">CV</a>
        <Dot />
        <a href="https://github.com/mkwng" target="_blank">GitHub</a>
      </Links>
    </Content>
    <Illustration>
      <img
        src={HeaderImage1536}
        srcSet={`${HeaderImage3072} 3072w, ${HeaderImage2304} 2304w, ${HeaderImage1536} 1536w, ${HeaderImage768} 768w, ${HeaderImage461} 461w, ${HeaderImage307} 307w, ${HeaderImage154} 154w`}
        sizes="(max-width: 640px) 100vw, 50vw"
        alt="Illustration of Michael Wang"
      />
    </Illustration>
  </Page>
);

const Dot = () => <DotSpan>&middot;</DotSpan>;

const DotSpan = styled.span`
  margin: 0 12px;
  color: ${Colors.dark};
  opacity: 0.3;
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
  padding: 64px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;

  @media only screen and (max-width: ${Breakpoints.desktop}) {
    padding: 48px 64px;
  }
  @media only screen and (max-width: ${Breakpoints.tablet}) {
    padding: 40px 48px;
  }
  @media only screen and (max-width: ${Breakpoints.mobile}) {
    padding: 32px 32px 0;
    flex: none;
    text-align: center;
    align-items: center;
  }
`;

const Name = styled.h1`
  font-family: 'CriteriaCF', Impact, Haettenschweiler, 'Franklin Gothic Bold', Charcoal, 'Helvetica Inserat', 'Bitstream Vera Sans Bold', 'Arial Black', sans-serif;
  font-weight: bold;
  font-size: 72px;
  text-transform: lowercase;
  color: ${Colors.dark};
  line-height: 1;
  letter-spacing: -1px;

  @media only screen and (max-width: ${Breakpoints.desktop}) { font-size: 56px; }
  @media only screen and (max-width: ${Breakpoints.tablet}) { font-size: 48px; }
  @media only screen and (max-width: ${Breakpoints.tiny}) { font-size: 36px; }
`;

const ChineseName = styled.span`
  font-size: 18px;
  color: ${Colors.dark};
  opacity: 0.4;
  margin-top: 8px;
  letter-spacing: 4px;

  @media only screen and (max-width: ${Breakpoints.tiny}) { font-size: 14px; }
`;

const Bio = styled.p`
  font-size: 22px;
  line-height: 1.6;
  color: ${Colors.dark};
  margin-top: 32px;
  max-width: 420px;
  opacity: 0.75;

  a {
    color: ${Colors.dark};
    text-decoration-color: ${Colors.dark};
    text-underline-offset: 3px;
    text-decoration-thickness: 1.5px;
    &:hover {
      opacity: 0.6;
    }
  }

  @media only screen and (max-width: ${Breakpoints.desktop}) { font-size: 20px; }
  @media only screen and (max-width: ${Breakpoints.tablet}) { font-size: 18px; }
  @media only screen and (max-width: ${Breakpoints.tiny}) { font-size: 16px; }
`;

const Links = styled.nav`
  margin-top: 32px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a {
    font-size: 15px;
    color: ${Colors.dark};
    text-decoration: none;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: normal;
    opacity: 0.5;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }

  @media only screen and (max-width: ${Breakpoints.tiny}) {
    a { font-size: 13px; }
  }
`;

const Illustration = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;

  img {
    height: 90%;
    width: auto;
    object-fit: contain;
    object-position: bottom;
  }

  @media only screen and (max-width: ${Breakpoints.mobile}) {
    flex: 1;
    width: 100%;
    min-height: 0;
    img {
      height: 100%;
      max-height: 45vh;
    }
  }
`;
