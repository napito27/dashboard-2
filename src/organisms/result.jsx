import { Box, Paper } from '@mui/material';

function Result({children}) {
  const [score1, score2, score3] = children;

  return (
    <Paper className='scorer-container' sx={{bgcolor:'#F2F2F2'}}>
      <Box className='scorer-header' >
        <h3><strong>Result</strong></h3>
        <h6>view all</h6> 
      </Box>
      {score1}
      {score2}
      {score3}
    </Paper>
  );
}

export default Result;