import { Box } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import UniversalHero from '../components/UniversalHero'
import GallerySection from '../components/GallerySection'

function Gallery() {
  return (
    <Box>
        <UniversalHero title="Gallery"/>
        <GallerySection/>
        <Footer/>
    </Box>
  )
}

export default Gallery