import React from 'react'
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Styles from '@/styles/Home.module.css'
import { KeyboardArrowRight } from '@mui/icons-material';

const Stat = () => {
    return (
        <>
            <Box py={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={4} order={{ xs: 1, sm: 1, lg: 1 }}>
                        <Card className={`shadow-none mb-3 ${Styles.statCard}`}>
                            <CardContent>
                                <Typography align='center' className={`${Styles.statKey}`}>Clients</Typography>
                                <Typography align='center' className={`${Styles.statCardTitle}`}>250 +</Typography>
                            </CardContent>
                        </Card>
                        <Card className={`shadow-none ${Styles.statCard}`}>
                            <CardContent className='d-flex justify-content-center'>
                                <img src="/images/rating.png" alt="" className='img-fluid' />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4} order={{ xs: 2, sm: 3, lg: 2 }}>
                        <Card className={`shadow-none ${Styles.statCard} d-flex align-items-center justify-content-center`} style={{ height: '100%' }}>
                            <CardContent>
                                <Typography align='center' className={`${Styles.statKey} text-dark`}>Leads Generated for Realtors</Typography>
                                <Typography align='center' className={`${Styles.gradientText} ${Styles.statCardTitle}`}>37,662 +</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} order={{ xs: 3, sm: 2, lg: 3 }}>
                        <Card className={`shadow-none ${Styles.statCard}`}>
                            <CardMedia component="img" image='/images/Avatars.svg' height="320" />
                            <CardContent>
                                <Box py={3}>
                                    <Typography variant='h4' className={`text-outfit`} gutterBottom>Get More Revenue</Typography>
                                </Box>
                                <Button className='button black-contained-button'>Contact Us <KeyboardArrowRight /></Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Stat