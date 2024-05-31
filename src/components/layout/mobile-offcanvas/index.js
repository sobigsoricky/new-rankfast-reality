import React from 'react'
import { Box } from '@mui/material'
import Link from 'next/link'
import Styles from '@/styles/OffCanvas.module.css'
import navConfig from '@/nav-config'

const OffCanvas = ({ open, handleMenuClick }) => {
    return (
        <>
            <Box p={2} className={`${Styles.offCanvas} ${open ? Styles.open : ''}`}>
                <ul className='navbar-nav'>
                    {
                        navConfig.map((item, index) => (
                            <li key={item.id} className='nav-item' onClick={() => handleMenuClick(open)}>
                                <Link href={item.path} legacyBehavior><a className={`nav-link fw-semibold`}>{item.title}</a></Link>
                            </li>
                        ))
                    }
                </ul>
            </Box>
        </>
    )
}

export default OffCanvas