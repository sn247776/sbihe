import { Box, TextField, Button } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function ContactSection() {
  return (
    <Box m="5%">
        <Box className="wapp">
            <WhatsAppIcon sx={{ fontSize: "25px" }}/>
        </Box>
      <Box className="contactDetails">
        <Box>
          <Box>
            <Box display="flex" alignItems="center">
              <PhoneIcon sx={{ fontSize: "35px", margin: "0 25px" }} />
              <Box>
                <h3>01398-255400</h3>
                <p>Monday to Saturday 10Am to 6Pm</p>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" my={5}>
              <AlternateEmailIcon sx={{ fontSize: "35px", margin: "0 25px" }} />
              <Box>
                <h3>sbiheshamli@gmail.com</h3>
                <p>Email us Your Query</p>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <HomeIcon sx={{ fontSize: "35px", margin: "0 25px" }} />
              <Box>
                <h3>Silver Bells Institute of Higher Education</h3>
                <p>Kairana Panipat Road(Shamli), UTTAR PRADESH 247776</p>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <TextField
            type="text"
            fullWidth
            variant="filled"
            label="Name"
            placeholder="Enter your name"
            color="warning"
            required
          />
          <TextField
            type="text"
            fullWidth
            variant="filled"
            label="Email"
            placeholder="Enter your email"
            color="warning"
            required
          />
          <TextField
            type="text"
            fullWidth
            variant="filled"
            label="Subject"
            placeholder="Enter your subject"
            color="warning"
            required
          />
          <TextField
            type="text"
            fullWidth
            variant="filled"
            placeholder="Enter your message"
            margin="normal"
            label="Message"
            color="warning"
            required
            multiline
            rows={4}
          />
          <Box marginY={1}>
            <Button
              variant="contained"
              size="large"
              color="warning"
              endIcon={<SendIcon fontSize="small" />}
              type="submit"
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
      <Box my={5}>
      <iframe loading="lazy" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.679721601407!2d77.287375663181!3d29.43815587326225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1b72e685098b%3A0x104dcfe8fa5acf15!2sSilver%20Bells%20Institute%20of%20Higher%20Education!5e0!3m2!1sen!2sin!4v1682151149693!5m2!1sen!2sin" title="Kairana Panipat Road(Shamli) 247776" aria-label="Silver Bells Institute For Higher Education"></iframe>
      </Box>
    </Box>
  );
}

export default ContactSection;
