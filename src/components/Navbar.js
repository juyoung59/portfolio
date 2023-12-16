import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Box} from "@mui/material";

export default function Navbar({darkMode, handleClick}) {

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>

                <a href='#home'>home</a>
                <a href='#about'>about</a>
                <a href='#portfolio'>portfolio</a>
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
                
            </Box>
        </Box>
        
    )
}