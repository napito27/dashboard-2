import React from 'react';

import { Box, Paper } from '@mui/material'

import playerAvatar from '../utils/player-avatar.webp';
import PlayerInfo from '../atoms/player-info';

function TopScorer({data}) {
  const [player1, player2, player3] = data;

  return (
    <Paper className='scorer-container' sx={{bgcolor:'#F2F2F2'}}>
      <Box className='scorer-header' >
        <h3><strong>Top Scorer</strong></h3>
        <h6>view all</h6>
      </Box>
      <PlayerInfo data={player1} playerAvatar={playerAvatar}/>
      <PlayerInfo data={player2} playerAvatar={playerAvatar}/>
      <PlayerInfo data={player3} playerAvatar={playerAvatar}/>
    </Paper>
  );
}

export default TopScorer;