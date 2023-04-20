import { Box } from '@mui/material'
import React from 'react'

import ASimg from '../assets/carousel-3.jpg'

function AboutSection() {
  return (
    <Box className="aboutPage">
        <Box>
            <h1>
            Welcome To SBIHE Shamli
            </h1>
            <p>
            SBIHE committed to excellence in education, hava been set up amidst the Gangetic plains, in a clean and pollution free surrounding of a "sugar Bowl City" called Shamli, Distict Shamli, U.P. about 100 Kms from the national capital New Delhi. The institute are a two hours drive from North Delhi and centre point of cities like Meerut, Muzaffarnagar, Sharanpur, Panipat and Kernal. It is nestled is Saccharum suurrounding on Panipat Road and well away from the hustle and bustle, lans of traffic, pollution and chsos of Shamli City.
            </p>
            <h2>
            Our Stories
            </h2>
            <p>
            Looking to the need of quality higher Education including Technical management & Teachers Education. The institute was set up by CITIZEN WELFARE SOCITY (Regd) in 2004. It is affiliated to CCS University Meerut and Approved by NCTE (GOI) , New Delhi.
            </p>
        </Box>
        <Box display="flex" justifyContent="right">
            <img src={ASimg}/>
        </Box>
    </Box>
  )
}

export default AboutSection