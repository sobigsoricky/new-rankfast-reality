import React from 'react'
import { Container, Grid } from '@mui/material'

const Section = ({ children, bg, cls }) => {
    return (
        <>
            <section className={cls}>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            {children}
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Section