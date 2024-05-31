import React from 'react'
import Marquee from "react-fast-marquee";
import { Box, Typography } from '@mui/material'
import { Clients } from '@/data';
import Styles from '@/styles/Home.module.css'
import SectionHeading from '../common/section-heading';

const OurClient = () => {
    return (
        <>
            <Box py={2}>
                <SectionHeading variant='h2' align='center' titleCls={Styles.ourClientTitle} title='Our Clients' />
                <Box mt={{ xs: 2, sm: 3, md: 4 }}>
                    <Marquee direction='right'>
                        {
                            Clients.map((client, index) => {
                                return (
                                    <Box key={`client-${index}`} className={`${Styles.clientBox}`}>
                                        <img src={client} alt="client" className='img-fluid' />
                                    </Box>
                                )
                            })
                        }
                    </Marquee>
                </Box>
            </Box>
        </>
    )
}

export default OurClient