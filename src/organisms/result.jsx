import { Box, Paper } from '@mui/material'

import Score from '../atoms/score';

import porto from '../team-logos/porto.ico';
import chelsea from '../team-logos/chelsea.ico';

function Result({data}) {
  const [result1, result2, result3] = data;

  return (
    <Paper className='scorer-container' sx={{bgcolor:'#F2F2F2'}}>
      <Box className='scorer-header' >
        <h3><strong>Result</strong></h3>
        <h6>view all</h6> 
      </Box>
      <Score data={result1} teamOne={porto} teamTwo={chelsea}/>
      <Score data={result2} teamOne={porto} teamTwo={chelsea}/>
      <Score data={result3} teamOne={porto} teamTwo={chelsea}/>
    </Paper>
  );
}

export default Result;