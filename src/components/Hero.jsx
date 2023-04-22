import { Box } from "@mui/material";
import React from "react";
import Topbar from "./Topbar";

function Hero() {
  return (
    <Box>
      <Box className="hero-bg">
        <Box className="bg-color">
        <Topbar />
        <Box className="hero">
          <Box className="intro">
            <h1 className="whiteHeading">Silver Bells Institute For Higher Education</h1>
            <p className="whiteHeading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. ut
              similique obcaecati expedita rem? Ipsa, beatae.
            </p>
          </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
