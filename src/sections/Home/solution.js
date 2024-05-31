import React from 'react'
import { Solutions } from '@/data'
import { Box, Grid } from '@mui/material'
import Styles from '@/styles/Home.module.css'
import SectionHeading from '../common/section-heading'
import { IconBox } from '@/components'

const Solution = () => {
    return (
        <>
            <Box py={2}>
                <SectionHeading variant="h2" align="center" titleCls="text--primary" title="Tackle Key Challenges with Our Solutions" taglineCls={Styles.solutionTagline} tagline="Our area of expertise at Rankfast is offering SEO services dedicated to the real estate sector." />
                <Box mt={4}>
                    <Grid container spacing={2}>
                        {
                            Solutions.map((solution, index) => <Grid item xs={12} sm={6}>
                                <IconBox img={solution.img} title={solution.title} desc={solution.desc} />
                            </Grid>)
                        }
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Solution