import { Box } from '@mui/material'
import React from 'react'
import UniversalHero from '../components/UniversalHero'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

function About() {
  return (
    <Box>
        <UniversalHero title="About"/>

        <AboutSection/>
        <Footer/>
    </Box>
  )
}

export default About