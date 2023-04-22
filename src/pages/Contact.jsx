import { Box } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import UniversalHero from '../components/UniversalHero'
import ContactSection from '../components/ContactSection'

function Contact() {
  return (
    <Box>
        <UniversalHero title="Contact Us"/>
        <ContactSection/>
        <Footer/>
    </Box>
  )
}

export default Contact