import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function Home() {

   return (
    <div id="home">
      
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '38vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            
            <h1>안녕하세요, <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>이주영</span>입니다<span className={Style.hand}>🤚</span>
            </h1>
            <h2>A Front End Engineer</h2>
            <Box component={'ul'} p={'0.8rem'}>
              <p1>활발한 성격인 저는 책상에 오래 앉아 있는 일을 선호하지 않았지만,
                <br></br>코딩하는 순간만큼은 달랐습니다.
                <br></br>웹 개발을 처음 접했을 때 가장 행복을 느꼈으며
                <br></br>현재 프론트엔드 개발자가 되겠다는 꿈을 이어가고 있습니다.
                <br></br>끊임 없이 발전하는 IT 산업의 변화에 뒤처지지 않고
                <br></br>세상에 없던 새로운 시스템을 만드는 개발자가 되는 것이 저의 목표입니다.</p1>
            </Box>
         </Box>
      </Box>
      </div>
   )
}