import React from 'react';

import "../pages/styles/app.css"

import Grid from '@mui/material/Unstable_Grid2';
import {Box, CssBaseline, Paper } from '@mui/material';

function Layout() {
  return (
    <Box style={{padding:"10px", height: "100vh", textAlign: "center"}}>
      <CssBaseline />
      <Grid container sx={{flexGrow: 1}} spacing={2}>
        
            {/** column 1 */}
        <Grid item flexBasis={100}>
          <Paper style={{ height: "718px", background: "lightgray" }}>Menu</Paper>
        </Grid>

        {/** column 2 */}
        <Grid item container flex={1}>
          <Grid item xs={12}>
            <Paper style={{ height: "70px", background: "lightgray" }}>Header</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "120px", background: "lightgray" }}>Branding</Paper>
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