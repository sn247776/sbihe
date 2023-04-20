import { Box } from "@mui/material";
import React from "react";
import library from "../assets/library.jpg"
import ground from "../assets/ground.jpg"
import lab from "../assets/computer.jpg"

function Facilities() {
  return (
    <Box className="section">
      <Box>
        <Box className="title">
          <h1>Our Facilities</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi
            harum libero fugiat.
          </p>
        </Box>
        <Box className="facilities-grid">
          <Box>
          <img src={library}/>
          <h3>Top Class Library</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolores doloribus ab mollitia</p>
          </Box>

          <Box>
          <img src={ground}/>
          <h3>Top Class Library</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolores doloribus ab mollitia</p>
          </Box>

          <Box>
          <img src={lab}/>
          <h3>Top Class Library</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolores doloribus ab mollitia</p>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default Facilities;
