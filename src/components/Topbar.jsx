import React,{useState, useEffect} from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Logo from "../assets/logo.png"

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [navbar, setNavbar] = useState(false)

const changeBackground = () =>{
  if(window.scrollY >=80){
    setNavbar(true)
  }
  else{
    setNavbar(false)
  }
}

window.addEventListener('scroll', changeBackground);
  return (
    <Box display="flex" justifyContent="space-between" p={2} px={3} alignItems="center" className="navbar" bgcolor={navbar ? colors.primary[400] : ''} color={navbar ? "" : 'white'} >
      <Box className="logo">
        <img src={Logo}/>
        <p>SBIHE</p>
      </Box>
      <Box></Box>

      {/* Nav Items */}
      <Box display="flex" alignItems="center" >
        <Box>
          <a>HOME</a>
          <a>ABOUT</a>
          <a>COURSE</a>
          <a>GALLERY</a>
          <a>CONTACT US</a>
        </Box>
        <Box>
        <Box onClick={colorMode.toggleColorMode} color={navbar ? "" : 'white'} >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{cursor:"pointer"}}/>
          ) : (
            <LightModeOutlinedIcon sx={{cursor:"pointer"}}/>
          )}
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
