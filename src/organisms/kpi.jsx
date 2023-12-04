import React from 'react';

import { Grid, Paper, Avatar, Box } from '@mui/material';

import logo1 from '../utils/logo192.png';

function KPI() {
  return (
    <Paper className='kpi-container' elevation={3}>
      <Grid container className='kpi-inner-cont' xs={12}>
        <Grid item className='kpi-title' xs={8}>
          <div><strong>UFC Quarter Final</strong></div>
        </Grid>
        <Grid item xs={4} sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end'}}>
          <div className='kpi-status-display'>Live</div>
        </Grid>

        <Box className='kpi-logos'>
          <Avatar src={logo1}></Avatar>
          <span className='kpi-timer'>3:18</span>
          <Avatar src={logo1}></Avatar>
        </Box>
      </Grid>

    </Paper>
  );
}

export default KPI;