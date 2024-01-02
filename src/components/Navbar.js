import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { Box } from "@mui/material";

export default function Navbar({ darkMode, handleClick }) {
    const scrollDuration = 800;
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY >= prevScrollY);
            prevScrollY = currentScrollY;
        };

        let prevScrollY = window.scrollY;
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTo = (element) => {
        scroll.scrollTo(element, {
            duration: scrollDuration,
            smooth: 'easeInOutQuad',
        });
    };

    return (
        <Box component={'nav'} width={'100%'} position={showNavbar ? 'fixed' : 'static'} zIndex={1000}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{ xs: '2rem', md: '8rem' }}
                 textTransform={'lowercase'} fontSize={'1rem'}>

                <Link to="home" spy={true} smooth={true} className={Style.link} onClick={() => scrollTo('home')}>
                    home
                </Link>
                <Link to="about" spy={true} smooth={true} className={Style.link} onClick={() => scrollTo('about')}>
                    about
                </Link>
                <Link to="project" spy={true} smooth={true} className={Style.link} onClick={() => scrollTo('project')}>
                    projects
                </Link>
            </Box>
        </Box>
    );
}