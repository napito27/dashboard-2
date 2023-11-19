import React from 'react';

import { Box } from '@mui/material';

const BRAND_CONT_STYLES = {
  background: "linear-gradient(to right, #4239C8, #322E83)", 
  borderRadius:"4px", 
  color: "#EEF3FD", 
  height: "120px",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  lineHeight: 0,
  padding: "0px 32px",
  justifyContent: "center"
}

function Branding() {

  return (
    <Box className="container" sx={BRAND_CONT_STYLES}>
      <h2>Champions League</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptates perspiciatis doloribus.</p>
    </Box>
  )
}

export default Branding;