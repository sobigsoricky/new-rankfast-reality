import React from 'react'
import { Box, Typography } from '@mui/material'

const SectionHeading = ({ title, tagline, variant, align, titleCls, taglineCls }) => {
    return (
        <>
            <Box>
                <Typography variant={variant} align={align} className={titleCls} gutterBottom>{title}</Typography>
                <Typography align={align} className={taglineCls}>{tagline}</Typography>
            </Box>
        </>
    )
}

export default SectionHeading