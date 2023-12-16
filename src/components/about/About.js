import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { Element } from 'react-scroll';

export default function About() {

  function aboutMeText() {
    return (
      <div>
        <p><span style={{ color: info.baseColor }}>&lt;About me</span></p>
        <p><span style={{ color: info.baseColor }}>👩🏻‍💻 Name $</span> 이주영 </p>
        <p><span style={{ color: info.baseColor }}>🍰 Date of Birth $</span> 2000. 05. 09 </p>
        <p><span style={{ color: info.baseColor }}>🏠 Address $</span> 인천광역시 부평구 </p>
        <p><span style={{ color: info.baseColor }}>📧 Email $</span> juyoung05@hanmail.net </p>
        <p><span style={{ color: info.baseColor }}>🏫 Education $</span> 한경국립대학교 전기전자제어공학과 </p>
        <p><span style={{ color: info.baseColor }}>/&gt;</span></p>
      </div>
    );
  }

  

  return (
    <div id='about'>
      <Element name="aboutSection">
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'10rem'} height={'600px'}>
          <Terminal text={aboutMeText()} />

        </Box>
      </Element>
    </div>
  );
}
