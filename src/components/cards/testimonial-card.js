import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Star } from '@mui/icons-material';
import Styles from '@/styles/TestimonialCard.module.css'

const TestimonialCard = ({ desc, name, designation }) => {
    return (
        <>
            <Card className={`${Styles.testimonialCard} shadow-none`}>
                <CardContent>
                    <Box>
                        <Star /><Star /><Star /><Star /><Star />
                    </Box>
                    <Box py={3}>
                        <Typography>{desc}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' className='text-outfit'>{name}</Typography>
                        <Typography>{designation}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default TestimonialCard