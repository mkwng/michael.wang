import React from "react";
import styled from 'styled-components';
import { Colors, Breakpoints, TextHeadline, TextPrimaryParagraph, TextSubtitle } from './common.js'
import Header from './components/header';
import ContentBlock from './components/contentBlock';
import CaseStudy from './components/caseStudy';
import './main.css';

const caseStudies = [
  {
    logo: "Northstar",
    title: "Making personal finance accessible to all",
    image: "",
    description: "I joined a team as first design hire to execute on the vision of autonomous personal finance. We wanted to take what a professional financial planner does and make it something everyone can benefit from.",
    ctaText: "Launch project",
    ctaLink: "https://northstarmoney.com",
    accent: Colors.green,
  },
  {
    logo: "Lyft",
    title: "Helping people make better transportation decisions",
    image: "",
    description: "While at Lyft, I led and helped scale a team from 4 to 30 at Lyft that focused on multi-modal transportation options. We shipped features such as information like public transportation schedules and routing helped our customers make better, more-informed transportation decisions.",
    ctaText: "Download the app",
    ctaLink: "https://lyft.com",
    accent: Colors.pink,
  },
  {
    logo: "Teleport",
    title: "Run your own car service with none of the overhead",
    image: "",
    description: "I founded Teleport with a few friends in 2015. Teleport helps bring people together by allowing organizations, and regular people alike to send cars to friends, clients, and more. Imagine running your own car service without the overhead.",
    ctaText: "Wound down 2017",
    accent: Colors.orange,
  },
]

export default () => (
  <>
    <Header />
    <Cta />
    <ContentBlock style={{background: Colors.yellow}}><TextPrimaryParagraph>
      If you’re here, you’re trying to figure out what Michael’s deal 
      is. Let’s make it easy: • Designing and developing digital products 
      since 2009 • Based out of Oakland • Currently Head of Design 
      at <a href="https://northstarmoney.com">Northstar</a>.
    </TextPrimaryParagraph></ContentBlock>
    <ContentBlock isCompact={true} style={{background: Colors.orange}}>
      <TextSubtitle>Well, is his work any good?</TextSubtitle>
    </ContentBlock>
    <CaseStudy
      {...caseStudies[0]}
    />
    <ContentBlock isCompact={true} style={{background: Colors.blue}}>
      <TextSubtitle>Let's see another for good measure</TextSubtitle>
    </ContentBlock>
    <CaseStudy
      {...caseStudies[1]}
    />
    <ContentBlock isCompact={true} style={{background: Colors.peach}}>
      <TextSubtitle>You can have one more, as a treat</TextSubtitle>
    </ContentBlock>
    <CaseStudy
      {...caseStudies[2]}
    />
  </>
);

const Cta = () => {
  return (
    <CtaContainer>
      <CtaLink href="#">Get in touch now!</CtaLink>
    </CtaContainer>
  )
}
const CtaContainer = styled.div`
  position: absolute;
  right: 32px;
  width: 220px;
  height: 220px;
  transform: rotate(45deg);
`
const CtaLink = styled.a`
  background: ${Colors.green};
  color: ${Colors.dark};
`

