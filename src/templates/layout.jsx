import React from 'react';

import "../styles/app.css";

import Grid from '@mui/material/Unstable_Grid2';
import { Box, CssBaseline, Paper } from '@mui/material';

function Layout( {children} ) {
  const [header, menu, branding] = children;

  return (
    <Box style={{ height: "100vh", textAlign: "center", paddingRight:"16px"}}>
      <CssBaseline />
      <Grid container sx={{flexGrow: 1}} spacing={2}>
        
            {/** column 1 */}
        <Grid item flexBasis={100}>
          {menu} 
        </Grid>

        {/** column 2 */}
        <Grid item container flex={1}>
          <Grid item xs={12}>
            {header}
          </Grid>
          <Grid item xs={12}>
            {branding}
          </Grid>
          
          <Grid item container xs={12}  justifyContent={"center"}>
            <Grid xs={3}>
              <Paper style={{ height: "130px", background: "lightgray" }}>PKI</Paper>
            </Grid>
            <Grid xs={3}>
              <Paper style={{ height: "130px", background: "lightgray" }}>PKI</Paper>
            </Grid>
            <Grid xs={3}>
              <Paper style={{ height: "130px", background: "lightgray" }}>PKI</Paper>
            </Grid>
            <Grid xs={3}>
              <Paper style={{ height: "130px", background: "lightgray" }}>PKI</Paper>
            </Grid>
          </Grid>
          
          <Grid item container xs={12}  justifyContent={"center"}>
            <Grid xs={4}>
              <Paper style={{ height: "350px", background: "lightgray" }}>Container 1</Paper>
            </Grid>
            <Grid xs={4}>
              <Paper style={{ height: "350px", background: "lightgray" }}>Container 2</Paper>
            </Grid>
            <Grid xs={4}>
              <Paper style={{ height: "350px", background: "lightgray" }}>Container 3</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;