import React from 'react';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

import { Box, List, ListItem, ListItemButton } from '@mui/material';

const MENU_ICON_STYLES = { 
  alignItems: "center", 
  background: "#3730A2", 
  display: "flex", 
  flexDirection: "column", 
  gap: "10px", 
  height: "100vh", 
  justifyContent: "center" 
}

function Menu() {
  return (
    <Box style={MENU_ICON_STYLES}>
      <List style={{color: "#EEF3FD"}} >
        <ListItem>
          <ListItemButton >
            <HomeOutlinedIcon />
          </ListItemButton>
        </ListItem>
          
        <ListItem >
          <ListItemButton>
            <ImageOutlinedIcon />
          </ListItemButton>
        </ListItem>

        <ListItem >
          <ListItemButton>
            <VideocamOutlinedIcon />
          </ListItemButton>
        </ListItem>

        <ListItem >
          <ListItemButton>
            <PieChartOutlineOutlinedIcon />
          </ListItemButton>
        </ListItem>

        <ListItem >
          <ListItemButton>
            <AssignmentOutlinedIcon />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );
}

export default Menu;