import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { Paper, Box, IconButton, InputBase } from '@mui/material';

function Header() {
  
  return (
    <Box style={{display:"flex", flexDirection: "row", padding:"16px 0px 0px", color:"#4B4E52", justifyContent:"space-between"}}>
      
      <Paper sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor:"#F3F4F6" }}>
        <IconButton sx={{ p: '10px' }} aria-label="search">
          <SearchOutlinedIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search here"/>
      </Paper>

      <Box>
        <IconButton sx={{ p: '10px' }} aria-label="account">
          <AccountCircleOutlinedIcon />
        </IconButton>
        <IconButton color="" sx={{ p: '10px' }} aria-label="notifications">
          <NotificationsNoneOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Header;