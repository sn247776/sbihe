import React,{useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Logo from "../assets/logo.png"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [navbar, setNavbar] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: navbar ? colors.link[500] : 'white',
      borderBottom: isActive ? "2px solid" : "none",
      textDecoration: "none",
    };
  };

  const mobLinkStyles = ({ isActive }) => {
    return {
      color: colors.link[500],
      borderBottom: isActive ? "2px solid" : "none",
      textDecoration: "none",
    };
  };


  const handleMenuClick = () => {
    
    setMenuOpen(!menuOpen);
    console.log(menuOpen)
  };
  

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
<Box>
<Box display="flex" justifyContent="space-between" p={2} px={3} alignItems="center" className="navbar" bgcolor={navbar ? colors.primary[400] : ''} color={navbar ? "" : 'white'} >
      <Box className="logo">
        <img src={Logo}/>
        <p>SBIHE</p>
      </Box>
      <Box>
      </Box>

      {/* Nav Items */}
      <Box display="flex" alignItems="center" >
        <Box display="flex">
        <NavLink style={navLinkStyles} to="/">
          <div>HOME</div>
          </NavLink>
          <NavLink style={navLinkStyles} to="/about">
          <a>ABOUT</a>
          </NavLink>
          <NavLink style={navLinkStyles} to="/course">
          <a>COURSE</a>
          </NavLink>
          <NavLink style={navLinkStyles} to="/gallery">
          <a>GALLERY</a>
          </NavLink>
          <NavLink style={navLinkStyles} to="/contact">
          <a>CONTACT US</a>
          </NavLink>
        </Box>
        <Box display="flex"> 
        <Box onClick={colorMode.toggleColorMode} color={navbar ? "" : 'white'} mx={1} >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{cursor:"pointer"}}/>
          ) : (
            <LightModeOutlinedIcon sx={{cursor:"pointer"}}/>
          )}
        </Box>
        <MenuIcon onClick={handleMenuClick}/>
        </Box>
      </Box>
    </Box>
    <Box className={menuOpen ? "mob-navbar" : 'mob-navbar open'} bgcolor={colors.primary[400]}>
      <Box textAlign="right">
        <IconButton>
          <CloseIcon onClick={handleMenuClick}/>
        </IconButton>
      </Box>
    <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center"  >
        <NavLink style={mobLinkStyles} to="/">
          <a>HOME</a>
          </NavLink>
          <NavLink style={mobLinkStyles} to="/about">
          <a>ABOUT</a>
          </NavLink>
          <NavLink style={mobLinkStyles} to="/course">
          <a>COURSE</a>
          </NavLink>
          <NavLink style={mobLinkStyles} to="/gallery">
          <a>GALLERY</a>
          </NavLink>
          <NavLink style={mobLinkStyles} to="/contact">
          <a>CONTACT US</a>
          </NavLink>
        </Box>
    </Box>
</Box>
  );
};

export default Topbar;
