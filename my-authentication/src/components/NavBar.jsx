import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DehazeIcon from "@mui/icons-material/Dehaze";

import { Grid } from "@mui/material";

export default function NavBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout = () => {
    navigazione();
  };

  const handleUpdate = () => {
    navigate("/update");
  };

  function navigazione() {
    navigate("/");
  }

  return (
    <>
      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={handleUpdate}>Change Information</MenuItem>
          <MenuItem onClick={handlelogout}>Logout</MenuItem>
        </Menu>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#063969" }}>
          <Toolbar>
            <Grid sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 2,
                  },
                }}
              >
                <DehazeIcon fontSize="large" />
              </Box>
            </Grid>
            <Stack direction="row" spacing={5}>
              <Avatar
                alt="Remy Sharp"
                src="https://ecuphar.it/assets/images/ecu_interne/news_procanicare_1000x600.jpg"
                onClick={handleClick}
              />
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
