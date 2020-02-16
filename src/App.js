import React from "react";
import styled from 'styled-components';
import { Colors, Breakpoints, TextHeadline, TextPrimaryParagraph, TextSecondaryParagraph, TextSubtitle } from './common.js'
import Header from './components/header';
import Cta from './components/cta';
import ContentBlock from './components/contentBlock';
import CaseStudy from './components/caseStudy';
import Footer from './components/footer';
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

const Articles = [
  {
    title: 'S.F. knew it couldn‘t beat Lyft on bike issue',
    description: '...so why did San Francisco attempt to renege on the 2015 exclusivity agreement anyway?',
    link: 'read now',
  },
  {
    title: 'Why are tech companies going public?',
    description: 'What is the reason a company would want to IPO at all? ',
    link: 'read now',
  },
  {
    title: 'Why "founder-led" matters',
    description: 'How much efficacy does a CEO actually hold on how the market might value their company?',
    link: 'read now',
  },
  {
    title: 'Whose problem is this?',
    description: 'How to prioritize when your business relies heavily on APIs',
    link: 'read now',
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

    <ContentBlock style={{background: Colors.green}}>
      <h2 style={{marginBottom: '32px'}}><TextHeadline>Writing</TextHeadline></h2>
      { Articles.map( (article, i) => (<Article key={i} {...article} />) ) }
    </ContentBlock>

    <Footer />

    <ContentBlock style={{background: Colors.blue, textAlign: 'center'}}>
      <h2 style={{marginBottom: '32px'}}><TextHeadline>Credits</TextHeadline></h2>
      <p><TextPrimaryParagraph>
        headlines: <a href="#">criteria</a> by connary fagen <br />
        body: <a href="#">fakt</a> by thomas thiemich <br />
        hand-coded using <a href="#">react</a> <br />
        hosted by <a href="#">netlify</a>
      </TextPrimaryParagraph></p>
    </ContentBlock>

  </>
);

const Article = (props) => {
  return (
    <a style={{display: 'block', textDecoration: 'none', marginBottom: '32px',}} href={props.link}>
      <h3><TextPrimaryParagraph>{props.title}</TextPrimaryParagraph></h3>
      <p><TextSecondaryParagraph>{props.description}</TextSecondaryParagraph></p>
      <p><TextSecondaryParagraph>Read now →</TextSecondaryParagraph></p>
    </a>
  )
}
