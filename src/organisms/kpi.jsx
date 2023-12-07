import React from 'react';

import { Grid, Paper, Box } from '@mui/material';

import barcelona from '../team-logos/barcelona.ico';
import realMadrid from '../team-logos/real-madrid.ico';

function KPI({data}) {
  const { transmission, title, teamOne, teamTwo, playTime } = data ?? {};
  const teams = [barcelona, realMadrid];
  
  return (
    <Paper className='kpi-container' elevation={3}>
      <Grid item container className='kpi-inner-cont' xs={12}>
        <Grid item className='kpi-title' xs={8}>
          <div><strong>{title}</strong></div>
        </Grid>
        <Grid item xs={4} sx={{display:'flex', alignItems:'flex-start', justifyContent:'flex-end'}}>
          <div className='kpi-status-display'>{transmission}</div>
        </Grid>

        <Box className='kpi-logos'>
          <img src={teams[0]} alt='logo' className='team-logo' />
          <span className='kpi-timer'>{playTime}</span>
          <img src={teams[1]} alt='logo' className='team-logo' />
        </Box>
      </Grid>

    </Paper>
  );
}

export default KPI;