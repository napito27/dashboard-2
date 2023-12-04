import React from 'react';

import { 
  SearchOutlined,
  AccountCircleOutlined,
  NotificationsNoneOutlined
} from '@mui/icons-material';

import { Paper, Box, IconButton, InputBase } from '@mui/material';

function Header() {
  
  return (
    <Box className='header-container'>
      
      <Paper className='header-search-cont' >
        <IconButton aria-label="search" disabled>
          <SearchOutlined  />
        </IconButton>
        <InputBase className='header-input' placeholder="Search here"/>
      </Paper>

      <Box>
        <IconButton  aria-label="account">
          <AccountCircleOutlined />
        </IconButton>
        <IconButton   aria-label="notifications">
          <NotificationsNoneOutlined />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Header;