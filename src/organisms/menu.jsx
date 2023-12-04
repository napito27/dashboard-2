import React from 'react';

import { 
  HomeOutlined,
  ImageOutlined,
  VideocamOutlined,
  PieChartOutlineOutlined,
  AssignmentOutlined
} from '@mui/icons-material';

import { Box, IconButton, ListItem, MenuList } from '@mui/material';

function Menu() {
  return (
    <Box className='menu-container'>
      <MenuList  >
        <ListItem>
          <IconButton >
            <HomeOutlined className='menu-icon'/>
          </IconButton>
        </ListItem>
          
        <ListItem >
          <IconButton>
            <ImageOutlined className='menu-icon' />
          </IconButton>
        </ListItem>

        <ListItem >
          <IconButton>
            <VideocamOutlined className='menu-icon'/>
          </IconButton>
        </ListItem>

        <ListItem >
          <IconButton>
            <PieChartOutlineOutlined className='menu-icon'/>
          </IconButton>
        </ListItem>

        <ListItem >
          <IconButton>
            <AssignmentOutlined className='menu-icon'/>
          </IconButton>
        </ListItem>

      </MenuList>
    </Box>
  );
}

export default Menu;