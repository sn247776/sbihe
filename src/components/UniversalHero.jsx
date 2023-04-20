import { Box } from '@mui/material'
import React from 'react'
import Topbar from './Topbar'

function UniversalHero() {
  return (
    <Box>
      <Box className="hero-bg">
        <Box className="bg-color">
        <Topbar/>
        <Box className="universal-hero">
          <Box>
            <h1>About Us</h1>
          </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UniversalHero