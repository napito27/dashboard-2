import React from 'react';

import "../styles/app.css";

import Grid from '@mui/material/Unstable_Grid2';
import { Box, CssBaseline } from '@mui/material';

function Layout( {children} ) {
  const [header, menu, branding, kpi1, kpi2, kpi3, kpi4, topScorer, result, resultNews] = children;

  return (
    <Box style={{ textAlign: "center", paddingRight:"16px"}}>
      <CssBaseline />
      <Grid container sx={{flexGrow: 1}} columnSpacing={2}>
        
        <Grid  flexBasis={70}> {menu} </Grid>
        <Grid  container flex={1} rowSpacing={0}>
          
          <Grid  xs={12}> {header} </Grid>
          <Grid  xs={12}> {branding} </Grid>
          
          <Grid  container xs={12}>
            <Grid xs={3}> {kpi1} </Grid>
            <Grid xs={3}> {kpi2} </Grid>
            <Grid xs={3}> {kpi3} </Grid>
            <Grid xs={3}> {kpi4} </Grid>
          </Grid>
          
          <Grid  container xs={12}  justifyContent={"center"}>
            <Grid xs={4}>
              <Grid> {topScorer} </Grid>
            </Grid>
            <Grid xs={4}>
              {result}
            </Grid>
            <Grid xs={4}>
              {resultNews}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;