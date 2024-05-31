import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import Styles from '@/styles/Home.module.css'

const Hero = () => {
    return (
        <>

            <Box className={Styles.heroContent}>
                <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} sm={5.5}>
                        <Typography variant='h1' className={`text-white ${Styles.title}`}>Building SEO Solutions For Real Estate Growth</Typography>
                        <Typography className={`text-white ${Styles.tagline}`}>Over 200 real estate companies have come to rely on our SEO strategies and tactics, which resulted in countless success stories.</Typography>
                        <Button className={`button white-contained-button ${Styles.heroCTA}`}>Contact Us</Button>
                    </Grid>
                    <Grid item xs={12} sm={5.5} className={`${Styles.heroImgContainer}`}>
                        <img src="/images/glass-abstract.svg" alt="" className={`img-fluid ${Styles.heroImg}`} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Hero