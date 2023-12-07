import { Box, Paper, Avatar } from '@mui/material'

function PlayerInfo({playerAvatar, data}) {
  const {name, team, scoredGoals} = data ?? {};

  return (
    <Paper className='inner-container' sx={{borderRadius:'16px'}}>
        <Avatar src={playerAvatar}/>
        <Box className='player-info-container'>
          <Box className='player-info'>
            <h4>{name}</h4>
            <h6>{team}</h6>
          </Box>
          <h5 className='goals-scored' >{scoredGoals}</h5>
        </Box>
      </Paper>
  );
}

export default PlayerInfo;