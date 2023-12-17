import React, { useState } from 'react';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { Box } from '@mui/material';
import { Element } from 'react-scroll';
import htmlImg from '../../img/html.png';
import cssImg from '../../img/css.png';
import jsImg from '../../img/js.png';
import reactImg from '../../img/react.png';
import djangoImg from '../../img/django.png';
import tsImg from '../../img/ts.png';
import nextImg from '../../img/next.png';
import gitImg from '../../img/git.png';

const SkillItem = ({ src, alt, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      style={{ marginRight: '50px', position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} height={'100px'} />
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            padding: '5px',
            textAlign: 'center',
          }}
        >
          {text}
        </div>
      )}
    </li>
  );
};

export default function About() {
  function aboutMeText() {
    return (
      <div>
        <p>
          <span style={{ color: "rgb(0,255,164)" }}>&lt;About me</span>
        </p>
        <p>
          <span style={{ color: "rgb(0,255,164)" }}>👩🏻‍💻 Name $</span> 이주영{' '}
        </p>
        <p>
          <span style={{ color: "rgb(0,255,164)" }}>🍰 Date of Birth $</span> 2000. 05. 09{' '}
        </p>
        <p>
          <span style={{ color: "rgb(0,255,164)" }}>🏠 Address $</span> 인천광역시 부평구{' '}
        </p>
        <p>
          <span style={{ color: "rgb(0,255,164)" }}>📧 Email $</span> juyoung05@hanmail.net{' '}
        </p>
        <p>
          <span style={{ color: "rgb(0,255,164)" }}>🏫 Education $</span> 한경국립대학교 전기전자제어공학과{' '}
        </p>
        <p>
          <span style={{ color: "rgb(0,255,164)" }}>/&gt;</span>
        </p>
      </div>
    );
  }

  return (
    <div id="about" className={Style.about}>
      <Element name="aboutSection">
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'10rem'} height={'800px'}>
          <Terminal text={aboutMeText()} />
        </Box>
      </Element>

      <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>Skills</h1>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
          <SkillItem src={htmlImg} alt="HTML Logo" text="Familiar" />
          <SkillItem src={cssImg} alt="CSS Logo" text="Familiar" />
          <SkillItem src={jsImg} alt="JavaScript Logo" text="Familiar" />
          <SkillItem src={tsImg} alt="TypeScript Logo" text="Tried" />
          <SkillItem src={nextImg} alt="NextJavaScript Logo" text="Tried" />
          <SkillItem src={reactImg} alt="React Logo" text="Familiar" />
          <SkillItem src={djangoImg} alt="Django Logo" text="Tried" />
          <SkillItem src={gitImg} alt="Git Logo" text="Familiar" />
          
        </ul>

      </section>
    </div>
  );
}
