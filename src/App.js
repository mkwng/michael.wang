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
    description: "I joined a team as first design hire to execute on the vision of autonomous personal finance. Everyone deserves the peace of mind that their budget, loans, and savings are balanced and allocated in the most efficient places, and we're building the tools to make it available to all.",
    ctaText: "Launch project",
    ctaLink: "https://www.northstarmoney.com",
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
    link: 'https://mkwng.substack.com/p/sf-knew-it-couldnt-beat-lyft-on-bike',
  },
  {
    title: 'Why are tech companies going public?',
    description: 'What is the reason a company would want to IPO at all? ',
    link: 'https://mkwng.substack.com/p/why-are-tech-companies-going-public',
  },
  {
    title: 'Why "founder-led" matters',
    description: 'How much efficacy does a CEO actually hold on how the market might value their company?',
    link: 'https://mkwng.substack.com/p/why-founder-led-matters',
  },
  {
    title: 'Whose problem is this?',
    description: 'How to prioritize when your business relies heavily on APIs',
    link: 'https://mkwng.substack.com/p/whose-problem-is-this',
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
      at <AltA href="https://www.northstarmoney.com" target="_blank">Northstar</AltA>.
    </TextPrimaryParagraph></ContentBlock>
    <ContentBlock isCompact={true} style={{background: Colors.orange}}>
      <TextSubtitle>What's he up to nowadays?</TextSubtitle>
    </ContentBlock>
    <CaseStudy {...caseStudies[0]} >
      <svg width="192" height="32" viewBox="0 0 256 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.4222 23.7908C26.6201 23.7908 27.8459 22.362 27.8459 19.2507V0.422607H33.3619V39.9643H27.639C27.639 39.9643 17.372 25.5748 13.4369 20.3203C11.7505 18.0249 10.8331 16.5961 8.93973 16.5961C6.74189 16.5961 5.51608 18.0249 5.51608 21.1362V39.9643H0V0.422607H5.723C5.723 0.422607 15.99 14.812 19.925 20.0666C21.6115 22.362 22.5289 23.7908 24.4222 23.7908Z" fill="#004A43"/>
        <path d="M66.0562 25.2507C66.0562 33.6283 61.1023 40.5771 52.3148 40.5771C43.4259 40.5771 38.4719 33.6283 38.4719 25.2507C38.4719 17.0254 43.4259 9.9751 52.3148 9.9751C61.0984 9.9751 66.0562 17.0254 66.0562 25.2507ZM60.587 25.2507C60.587 20.6013 57.3156 17.8959 52.3109 17.8959C47.2008 17.8959 43.9334 20.6052 43.9334 25.2507C43.9334 30.1031 47.2047 32.6601 52.3109 32.6601C57.3195 32.6601 60.587 30.1031 60.587 25.2507Z" fill="#004A43"/>
        <path d="M93.383 30.3765V18.2512H88.6828C83.0613 18.2512 79.6416 18.8134 77.6975 22.1355C76.7762 23.7205 76.5732 25.6607 76.5732 28.5729V39.9642H71.0571V10.5881H76.5732V18.0482C78.1074 12.9382 81.4256 10.5881 87.3516 10.5881H93.3791V3.07715H98.8952V10.5881H110.021V18.2512H98.8952V28.1396" fill="#004A43"/>
        <path d="M117.044 39.9643V0.422607H122.56V18.1498C123.786 13.4496 127.311 10.0767 132.827 10.0767C139.214 10.0767 143.555 15.0306 143.555 22.0809V39.9604H138.039V25.7583C138.039 23.9196 137.836 22.4362 136.813 21.0074C135.486 19.1687 133.491 18.2474 130.633 18.2474C127.467 18.2474 124.453 19.3717 123.071 23.1506C122.56 24.5794 122.56 26.8787 122.56 29.3303V39.9565H117.044V39.9643Z" fill="#004A43"/>
        <path d="M181.683 30.3765V18.2512H176.983V10.5881H181.683V3.07715H187.199V10.5881H198.325V18.2512H187.199V28.1396" fill="#004A43"/>
        <path d="M224.738 39.9642V34.4481C223.052 38.1762 220.038 40.5771 215.646 40.5771C207.73 40.5771 203.486 33.8859 203.486 25.3015C203.486 16.8731 207.726 9.9751 215.646 9.9751C220.038 9.9751 223.056 12.4267 224.738 16.1548V10.588H230.255V39.9642H224.738V39.9642ZM224.738 25.2507C224.738 20.6013 221.572 17.8959 216.872 17.8959C212.071 17.8959 208.955 20.6052 208.955 25.2507C208.955 30.1031 212.071 32.6601 216.872 32.6601C221.572 32.6601 224.738 30.1031 224.738 25.2507Z" fill="#004A43"/>
        <path d="M237.355 39.964V10.5879H242.872V18.0481C244.406 12.938 247.724 10.5879 253.65 10.5879H256V18.2511H254.977C249.36 18.2511 245.936 18.8132 243.992 22.1354C243.071 23.7203 242.868 25.6605 242.868 28.5727V39.964H237.355Z" fill="#004A43"/>
        <path d="M187.199 28.1398C187.199 30.6265 188.128 32.676 191.685 32.676C194.874 32.676 196.272 31.0676 196.272 28.1124H200.101C200.632 36.1855 197.825 40.5773 191.197 40.5773C184.599 40.5773 181.679 35.639 181.679 30.3766" fill="#004A43"/>
        <path d="M98.903 28.1398C98.903 30.6265 99.8321 32.676 103.389 32.676C106.578 32.676 107.975 31.0676 107.975 28.1124H111.805C112.336 36.1855 109.529 40.5773 102.901 40.5773C96.3031 40.5773 93.3831 35.639 93.3831 30.3766" fill="#004A43"/>
        <path d="M174.738 31.4851C174.738 35.4436 171.865 40.5771 162.375 40.5771C152.053 40.5771 148.204 34.6511 148.458 28.1122H152.288C152.288 29.7479 153.279 30.9229 154.454 31.6373C156.574 32.8827 159.939 33.0661 162.75 33.0661C166.22 33.0661 169.234 32.1605 169.234 30.2905C169.234 29.2599 168.613 28.4167 166.654 28.0614C165.361 27.8272 163.566 27.5383 160.954 27.2182C155.098 26.496 149.129 25.4537 149.129 19.1725C149.129 13.6681 153.845 9.9751 160.618 9.9751C169.722 9.9751 173.958 15.8542 173.368 21.9637H169.64C169.64 20.6754 168.609 19.2974 167.333 18.6337C165.853 17.8686 163.968 17.3845 160.954 17.3845C156.988 17.3845 154.345 18.2317 154.345 20.1328C154.345 21.6163 155.547 22.3775 161.715 23.0802C165.674 23.5213 168.41 23.8844 170.284 24.7198C173.509 26.0315 174.738 28.7758 174.738 31.4851Z" fill="#004A43"/>
      </svg>
    </CaseStudy>
    <ContentBlock isCompact={true} style={{background: Colors.blue}}>
      <TextSubtitle>What about before that?</TextSubtitle>
    </ContentBlock>
    <CaseStudy {...caseStudies[1]} >
      <svg width="96" height="66" viewBox="0 0 128 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7317 51.5125V1.56128H0V48.3905C0 61.2592 8.49639 67.1207 16.3902 67.1207C18.7426 67.1207 21.0997 66.5822 23.2133 65.5956C23.5255 65.4504 24.025 65.1383 24.025 65.1383C24.025 65.1383 23.5504 64.6387 23.3569 64.4186C20.3598 61.0095 18.7317 56.5732 18.7317 51.5125Z" fill="#FF00BF"/>
        <path d="M128 39.0248V20.2931H121.316C118.523 5.56994 103.049 -4.09875 87.499 1.71276C78.8387 4.95023 71.8049 15.3026 71.8049 24.5483V67.1036C71.8049 67.1036 72.5776 67.1052 72.5854 67.1052C72.5963 67.1052 72.6073 67.1052 72.6182 67.1052C77.4416 66.8976 81.9497 64.8574 85.3089 61.3592C88.6806 57.8501 90.5366 53.2437 90.5366 48.3906H98.3415V29.6589H90.5366V24.5108C90.5366 22.5096 91.5934 20.638 93.3433 19.6655C98.1401 17.0025 103.024 20.4289 103.024 24.976V42.1467C103.024 48.9416 105.588 55.2464 110.244 59.9028C114.697 64.3563 120.718 66.9163 127.196 67.1098C127.204 67.1098 128 67.1098 128 67.1098V48.3922C128 48.3922 128 48.3906 127.998 48.3906C124.497 48.3813 121.756 45.5606 121.756 42.1467V39.0248H128Z" fill="#FF00BF"/>
        <path d="M48.3902 20.293V45.2686C48.3902 46.9935 46.9931 48.3905 45.2682 48.3905C43.5433 48.3905 42.1463 46.9935 42.1463 45.2686V20.293H23.4146V51.5125C23.4146 60.1197 30.4171 67.1222 39.0243 67.1222C42.7441 67.1222 46.3484 65.7907 49.1706 63.3759C48.8787 65.6799 47.6065 67.5983 45.4899 68.9236C43.5059 70.1661 40.9225 70.8218 38.0175 70.8233C35.0266 70.8233 31.9827 70.1193 29.2167 68.7878C29.2167 68.7878 28.7219 68.5521 28.0975 68.1962V84.8346C32.2668 86.5236 36.8327 87.4165 41.2581 87.4165C48.2559 87.4165 54.6419 85.228 59.2374 81.2553C64.3964 76.7956 67.1219 70.2895 67.1219 62.4393V20.293H48.3902Z" fill="#FF00BF"/>
      </svg>
    </CaseStudy>
    <ContentBlock isCompact={true} style={{background: Colors.peach}}>
      <TextSubtitle>How about one more, for good measure</TextSubtitle>
    </ContentBlock>
    <CaseStudy {...caseStudies[2]} >
      <svg width="134" height="26" viewBox="0 0 179 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.36 14.2165V7.6165H12.52V0.416502H4.72V7.6165H0.08V14.2165H4.72V20.6165C4.72 25.6165 7.2 28.6165 13.72 28.6165H18.36V21.6565H15.2C13.56 21.6565 12.52 21.1365 12.52 19.1765V14.2165H18.36ZM28.5059 20.1765H43.6259C44.3059 11.9765 39.8259 7.0165 32.2659 7.0165C24.8259 7.0165 20.5859 11.7365 20.5859 18.0165C20.5859 24.2565 24.6259 29.0165 32.1859 29.0165C39.2659 29.0165 42.9459 24.8165 43.1859 21.4965H35.7859C35.4659 22.5365 34.2659 23.0965 32.5459 23.0965C30.1459 23.0965 28.9459 22.0565 28.5059 20.1765ZM28.4659 15.5765C28.9459 13.5765 30.1059 12.6965 32.2659 12.6965C34.2259 12.6965 35.3459 13.4565 35.9059 15.5765H28.4659ZM46.7031 28.4165H54.5031V0.0165024H46.7031V28.4165ZM65.42 20.1765H80.54C81.22 11.9765 76.74 7.0165 69.18 7.0165C61.74 7.0165 57.5 11.7365 57.5 18.0165C57.5 24.2565 61.54 29.0165 69.1 29.0165C76.18 29.0165 79.86 24.8165 80.1 21.4965H72.7C72.38 22.5365 71.18 23.0965 69.46 23.0965C67.06 23.0965 65.86 22.0565 65.42 20.1765ZM65.38 15.5765C65.86 13.5765 67.02 12.6965 69.18 12.6965C71.14 12.6965 72.26 13.4565 72.82 15.5765H65.38ZM97.4972 7.0965C94.8572 7.0965 92.4172 7.9765 90.1372 11.4565V11.4165L91.4172 9.2965L91.2972 7.6165H83.6172V34.1765H91.4172V26.4565C93.0572 28.4565 95.2572 29.0165 97.4972 29.0165C103.657 29.0165 107.537 24.0565 107.537 18.0165C107.537 12.0165 103.657 7.0965 97.4972 7.0965ZM95.5772 22.2165C92.9772 22.2165 91.3372 20.4565 91.3372 18.0165C91.3372 15.5765 92.9772 13.8165 95.5772 13.8165C98.1372 13.8165 99.7772 15.5765 99.7772 18.0165C99.7772 20.4565 98.1372 22.2165 95.5772 22.2165ZM121.72 29.0165C129.16 29.0165 133.48 24.2165 133.48 18.0165C133.48 11.8165 129.16 7.0165 121.72 7.0165C114.4 7.0165 110 11.8165 110 18.0165C110 24.2165 114.36 29.0165 121.72 29.0165ZM121.72 22.0965C119.16 22.0965 117.68 20.3765 117.68 18.0165C117.68 15.6965 119.16 13.9365 121.72 13.9365C124.32 13.9365 125.8 15.6965 125.8 18.0165C125.8 20.3365 124.32 22.0965 121.72 22.0965ZM150.469 7.0165C146.509 7.0165 144.789 9.2165 143.469 11.8965L144.269 10.0965L143.989 7.6165H136.469V28.4165H144.269V17.6165C144.269 15.7765 144.869 13.8165 147.549 13.8165C150.269 13.8165 150.629 15.7765 150.629 17.5765V18.0965H157.909V16.2565C157.909 10.7765 155.629 7.0165 150.469 7.0165ZM178.673 14.2165V7.6165H172.833V0.416502H165.033V7.6165H160.393V14.2165H165.033V20.6165C165.033 25.6165 167.513 28.6165 174.033 28.6165H178.673V21.6565H175.513C173.873 21.6565 172.833 21.1365 172.833 19.1765V14.2165H178.673Z" 
        fill={Colors.orange} />
      </svg>
    </CaseStudy>

    <ContentBlock style={{background: Colors.green}}>
      <h2 style={{marginBottom: '32px'}}><TextHeadline>Writing</TextHeadline></h2>
      { Articles.map( (article, i) => (<Article key={i} {...article} />) ) }
    </ContentBlock>

    <Footer id="footer" />

    <ContentBlock style={{background: Colors.blue, textAlign: 'center'}}>
      <h2 style={{marginBottom: '32px'}}><TextHeadline>Credits</TextHeadline></h2>
      <p><TextPrimaryParagraph>
        Headlines: <a href="https://connary.com/criteria.html">Criteria</a> by Connary Fagen <br />
        Body: <a href="https://www.typeby.com/fonts/fakt">Fakt</a> by Thomas Thiemich <br />
        Hosted by <a href="https://netlify.com">Netlify</a> <br />
        Hand-coded in React and <a href="https://github.com/mkwng/michael.wang">open source</a>
      </TextPrimaryParagraph></p>
    </ContentBlock>

  </>
);

const AltA = styled.a`
  &:hover {
    text-decoration-color: ${Colors.blue};
  }
`

const Article = (props) => {
  return (
    <a style={{display: 'block', textDecoration: 'none', marginBottom: '32px',}} href={props.link} target="_blank">
      <h3><TextPrimaryParagraph>{props.title}</TextPrimaryParagraph></h3>
      <p><TextSecondaryParagraph>{props.description}</TextSecondaryParagraph></p>
      <FakeLink><TextSecondaryParagraph>Read now →</TextSecondaryParagraph></FakeLink>
    </a>
  )
}
const FakeLink = styled.p`
  text-decoration: underline;
  text-decoration-color: ${Colors.light};
  &:hover {
    text-decoration-color: ${Colors.yellow};
  }
`
