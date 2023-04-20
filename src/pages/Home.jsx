import React from 'react'
import Hero from '../components/Hero'
import { Box } from '@mui/material'
import Courses from '../components/Courses'
import Facilities from '../components/Facilities'
import ApplyNow from '../components/ApplyNow'
import Footer from '../components/Footer'

function Home() {
  return (
    <Box>
        <Hero/>
        <Courses/>
        <Facilities/>
        <ApplyNow/>
        <Footer/>
    </Box>
  )
}

export default Home