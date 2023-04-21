import { Box } from '@mui/material'
import React from 'react'
import "./gallery.css"

import Img1 from "../galleryimg/1.jpg"
import Img2 from "../galleryimg/2.jpg"
import Img3 from "../galleryimg/3.jpg"
import Img4 from "../galleryimg/4.jpg"
import Img5 from "../galleryimg/5.jpg"
import Img6 from "../galleryimg/6.jpg"
import Img7 from "../galleryimg/7.jpg"
import Img8 from "../galleryimg/8.jpg"
import Img9 from "../galleryimg/9.jpg"
import Img10 from "../galleryimg/10.jpg"

import Img11 from "../galleryimg/11.jpg"
import Img12 from "../galleryimg/12.jpg"
import Img13 from "../galleryimg/13.jpg"
import Img14 from "../galleryimg/14.jpg"
import Img15 from "../galleryimg/15.jpg"

function GallerySection() {
  return (
<Box className="container">
    
      <Box className="box">
        <Box className="dream">
          <img src={Img1} />
          <img src={Img2} />
          <img src={Img3} />
          <img src={Img4} />
          <img src={Img5} />
        </Box>

        <Box className="dream">
        <img src={Img6} />
          <img src={Img7} />
          <img src={Img8} />
          <img src={Img9} />
          <img src={Img10} />
        </Box>

        <Box className="dream">
        <img src={Img11} />
          <img src={Img12} />
          <img src={Img13} />
          <img src={Img14} />
          <img src={Img15} />
        </Box>
      </Box>
    </Box>
  )
}

export default GallerySection