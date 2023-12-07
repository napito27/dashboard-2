import { Paper, Stack, Typography } from '@mui/material'

function Score({teamOne, teamTwo, data}) {
  const {team1, team2} = data ?? {};

  return (
    <Paper className='score-container' sx={{bgcolor:'#192534', borderRadius:'16px'}}>
      <Stack direction="row" spacing={2} alignItems="center">
        <img src={teamOne} alt='logo' className='team-logo' />
        <Typography variant="h6" className='team-name'>{team1?.name}</Typography>
      </Stack>
      <h5 className='score-display' >{team1?.score} - {team2?.score}</h5>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h6" className='team-name'>{team2?.name}</Typography>
        <img src={teamTwo} alt='logo' className='team-logo' />
      </Stack>
    </Paper>
  );
}

export default Score;