import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Box, Button, Container, Grid } from '@mui/material'
import navConfig from '@/nav-config'
import Styles from '@/styles/Header.module.css'
import { Close, Menu } from '@mui/icons-material'
import OffCanvas from '../mobile-offcanvas'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    const handleMenuClick = (open) => { setOpen(!open) }

    return (
        <>
            <header className={`${Styles.header} ${isScrolled ? `shadow bg-white` : 'bg-transparent'}`}>
                <Container maxWidth="xxl" className={`${Styles.desktop}`}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <nav className='navbar navbar-expand-sm'>
                                <Link href="/" legacyBehavior><a className={`navbar-brand ${Styles.logo}`}>
                                    <img src={`${isScrolled ? "/images/black-logo.png" : "/images/white-logo.png"}`} alt="logo" className='img-fluid' />
                                </a></Link>
                                <Box className="collapse navbar-collapse">
                                    <ul className="navbar-nav ms-auto">
                                        {navConfig.map((item, index) => (
                                            <li
                                                key={item.path}
                                                className={`nav-item ${index === navConfig.length - 1 ? Styles.lastNav : ''} ${isScrolled && index === navConfig.length - 1 ? Styles.black : ''}`}
                                            >
                                                <Link href={item.path} legacyBehavior>
                                                    <a className={isScrolled ? `${Styles.black} nav-link ` : `${Styles.white} nav-link `}>
                                                        {item.title}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            </nav>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="xxl" className={`${Styles.mobile}`}>
                    <nav className='navbar'>
                        <Link href="/" legacyBehavior><a className={`navbar-brand ${Styles.logo}`}>
                            <img src={`${isScrolled || open ? "/images/black-logo.png" : "/images/white-logo.png"}`} alt="logo" className='img-fluid' /></a></Link>
                        <Button className='p-0' onClick={() => setOpen(!open)}>{open ? <Close style={{ color: isScrolled || open ? 'black' : 'white' }} /> : <Menu style={{ color: isScrolled || open ? 'black' : 'white', minWidth: "1px" }} />}</Button>
                        <OffCanvas open={open} handleMenuClick={handleMenuClick} />
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default Header