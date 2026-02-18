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
        sizes="(max-width: 640px) 100vw, 40vw"
        alt="Illustration of Michael Wang"
      />
    </Illustration>
    <Content>
      <Name>Michael Wang <ChineseName>王理棟</ChineseName></Name>
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
  margin: 0 6px;
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
  justify-content: center;
  position: relative;

  @media only screen and (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;

  @media only screen and (max-width: ${Breakpoints.mobile}) {
    padding: 24px 28px 0;
  }
`;

const Name = styled.h1`
  font-size: 16px;
  font-weight: normal;
  color: ${Colors.dark};
  line-height: 1;
`;

const ChineseName = styled.span`
  opacity: 0.35;
  margin-left: 4px;
`;

const Bio = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${Colors.dark};
  margin-top: 16px;
  max-width: 340px;
  opacity: 0.55;

  a {
    color: ${Colors.dark};
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    &:hover {
      opacity: 0.6;
    }
  }
`;

const Links = styled.nav`
  margin-top: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a {
    font-size: 16px;
    color: ${Colors.dark};
    text-decoration: none;
    opacity: 0.35;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
`;

const Illustration = styled.div`
  flex: none;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 48px;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }

  @media only screen and (max-width: ${Breakpoints.mobile}) {
    height: auto;
    margin-right: 0;
    margin-bottom: 16px;
    img {
      max-height: 35vh;
      width: auto;
    }
  }
`;
