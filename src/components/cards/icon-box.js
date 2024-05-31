import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import Styles from '@/styles/IconBox.module.css'

const IconBox = ({ img, title, desc }) => {
    return (
        <>
            <Card className={`shadow-none ${Styles.IconBox}`} sx={{ height: '100%' }}>
                <CardContent>
                    <Box>
                        <img src={img} className='img-fluid' />
                    </Box>
                    <Box mt={2}>
                        <Typography variant='h5' className={`text-outfit`} gutterBottom>{title}</Typography>
                        <Typography>{desc}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default IconBox