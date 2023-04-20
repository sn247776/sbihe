import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2} px={3} alignItems="center" className="navbar" bgcolor={colors.primary[400]}>
      <Box>
        Logo
      </Box>

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
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
