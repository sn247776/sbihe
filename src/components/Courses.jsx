import React from 'react'
import { Box } from '@mui/material'
function Courses() {
  return (
    <Box className="section">
        <Box>
        <Box className="title">
            <h1>Courses We Offer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi harum libero fugiat.</p>
        </Box>
        <Box className="grid">
            <Box>
                <h3>BCA</h3>
                <p>The demand of IT professionals is increasing not only in India but also in abroad. After the completion of the course, the student can find a job in reputed IT companies.</p>
            </Box>
            <Box>
                <h3>B.Com.</h3>
                <p>A career in commerce offers immense growth as demand for professionals is always on a high. Job opportunities exists right after the programme.</p>
            </Box>
            <Box>
                <h3>BBA</h3>
                <p> On completion of BBA, aspirants generally opt for MBA. However, candidates can also choose to explore job opportunities in various fields like banking</p>
            </Box>
            <Box>
                <h3>B.ED</h3>
                <p> On completing Bachelor of Education, aspirants can become teachers at the primary, secondary and senior secondary levels in schools.</p>
            </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default Courses