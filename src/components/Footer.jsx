import { Box, IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box fontWeight="500">
      <Box display="flex" justifyContent="space-between" px={5} alignItems="center" >
        <Box>
          <p>Email Id:- sbiheshamli@gmail.com</p>
          <p>Office_no:-9760564500</p>
          <p>Kairana Panipat Road(Shamli) 247776</p>
        </Box>
        <Box className="SocialMedia">
          <a>
            <IconButton>
            <FacebookIcon fontSize="large"/>
            </IconButton>
          </a>
          <a>
          <IconButton>
            <WhatsAppIcon fontSize="large"/>
            </IconButton>
          </a>
          <a>
          <IconButton>
            <TwitterIcon fontSize="large"/>
            </IconButton>
          </a>
          <a>
          <IconButton>
            <InstagramIcon fontSize="large"/>
            </IconButton>
          </a>
        </Box>
      </Box>
      <Box textAlign="center" py={2}>
        <p>
          CREATE BY SBIHE BCA BATCH (2020-23). SAGAR NIRWAL, AMIT CHAUHAN,
          ABHISHEK CHAUHAN, ANKUSH KUMAR, JUNAID
        </p>
      </Box>
    </Box>
  );
}

export default Footer;
