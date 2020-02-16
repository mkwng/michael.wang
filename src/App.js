import React from "react";
import styled from 'styled-components';
import './main.css';

const Colors = {
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

const TextHeadline = (props) => { return ( <TextHeadlineContainer>{props.children}</TextHeadlineContainer> ) }
const TextHeadlineContainer = styled.span`
  font-family: 'CriteriaCF', Impact, Haettenschweiler, ‘Franklin Gothic Bold’, Charcoal, ‘Helvetica Inserat’, ‘Bitstream Vera Sans Bold’, ‘Arial Black’, sans-serif;
  font-weight: bold;
  font-size: 64px;
  font-display: swap;
`

const TextSubtitle = (props) => { return ( <TextSubtitleContainer>{props.children}</TextSubtitleContainer> ) }
const TextSubtitleContainer = styled.span`
  font-family: 'CriteriaCF';
  font-weight: bold;
  font-size: 32px;
  font-display: swap;
`

const TextPrimaryParagraph = (props) => { return ( <TextPrimaryParagraphContainer>{props.children}</TextPrimaryParagraphContainer> ) }
const TextPrimaryParagraphContainer = styled.span`
  font-size: 48px;
`

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
      logo="Northstar"
      title="Making personal finance accessible to all"
      image=""
      description="I joined a team as first design hire to execute on the vision of autonomous personal finance. We wanted to take what a professional financial planner does and make it something everyone can benefit from."
    />
    <ContentBlock isCompact={true} style={{background: Colors.blue}}>
      <TextSubtitle>Let's see another for good measure</TextSubtitle>
    </ContentBlock>
    <CaseStudy
      logo="Lyft"
      title="Helping people make better transportation decisions"
      image=""
      description="While at Lyft, I led and helped scale a team from 4 to 30 at Lyft that focused on multi-modal transportation options. We shipped features such as information like public transportation schedules and routing helped our customers make better, more-informed transportation decisions."
    />
    <ContentBlock isCompact={true} style={{background: Colors.peach}}>
      <TextSubtitle>You can have one more, as a treat</TextSubtitle>
    </ContentBlock>
    <CaseStudy
      logo="Teleport"
      title="Run your own car service with none of the overhead"
      image=""
      description="I founded Teleport with a few friends in 2015. Teleport helps bring people together by allowing organizations, and regular people alike to send cars to friends, clients, and more. Imagine running your own car service without the overhead."
    />
  </>
);

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <h1><TextHeadline>Michael Wang* wants to design with you.</TextHeadline></h1>
        <p>*he is a digital product designer</p>
        <div>王理棟</div>
      </HeaderTitleContainer>
      <HeaderIllustrationContainer style={{ background: Colors.beige, position: 'relative'}} >
        Picture
        <LastUpdated>Last updated Feb 2020</LastUpdated>
      </HeaderIllustrationContainer>
    </HeaderContainer>
  )
}
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  border-bottom: 8px solid ${Colors.dark};
  min-height: 50vw;
  align-items: center;
  div {
    flex-grow: 1;
  }
`
const HeaderIllustrationContainer = styled.div`
  width: 50%;
  align-self: stretch;
`
const HeaderTitleContainer = styled.div`
  width: 50%;
  padding: 128px;
  text-align: center;
  background: ${Colors.dark}; 
  color: ${Colors.light};
`
const LastUpdated = styled.div`
  background: ${Colors.pink};
  position: absolute;
  padding: 8px 16px;
  border: 8px solid ${Colors.dark};
  left: 0;
  top: 50%;
  transform: rotate(90deg) translateX(-50%);
  transform-origin: bottom left;
`


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

const ContentBlock = (props) => {
  return (
    <ContentBlockContainer {...props}>
      <p>
        {props.children}
      </p>
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
`


const CaseStudy = (props) => {
  return (
    <CaseStudyContainer {...props}>
      <div>{props.logo}</div>
      <h2><TextHeadline>{props.title}</TextHeadline></h2>
      <div>{props.image}</div>
      <p><TextPrimaryParagraph>{props.description}</TextPrimaryParagraph></p>
    </CaseStudyContainer>
  )
}
const CaseStudyContainer = styled.div`
  padding: 128px;
  border-bottom: 8px solid ${Colors.dark};
  background: ${Colors.light};
`
