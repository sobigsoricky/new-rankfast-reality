import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { Testimonial } from '@/data'
import { Box } from '@mui/material'

import SectionHeading from '../common/section-heading'
import { TestimonialCard } from '@/components'

const ClientTestimonial = () => {
    const [width, setWidth] = useState(1280)

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    }, [width])

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: width > 600 ? "60" : "0",
        slidesToShow: width > 992 ? 3 : width > 600 ? 2 : 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false
    };

    return (
        <>

            <Box py={2}>
                <SectionHeading variant="h2" align="center" className={`text--primary`} title="Our Happy Clients" />
                <Box mt={2}>
                    <Slider {...settings}>
                        {
                            Testimonial.map((testimonial, index) => <Box p={2} key={testimonial.id}>
                                <TestimonialCard desc={testimonial.desc} name={testimonial.name} designation={testimonial.designation} />
                            </Box>)
                        }
                    </Slider>
                </Box>
            </Box>
        </>
    )
}

export default ClientTestimonial