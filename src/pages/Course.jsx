import { Box } from '@mui/material'
import React from 'react'
import UniversalHero from '../components/UniversalHero'
import Footer from '../components/Footer'
import CourseSection from '../components/CourseSection'

function Course() {
  return (
    <Box>
        <UniversalHero title="Course"/>
        <CourseSection/>
        <Footer/>
    </Box>
  )
}

export default Course