import { Box, Paper } from '@mui/material'

function TopScorer({ children }) {
  const [scorer1, scorer2, scorer3] = children;

  return (
    <Paper className='scorer-container' sx={{bgcolor:'#F2F2F2'}}>
      <Box className='scorer-header' >
        <h3><strong>Top Scorer</strong></h3>
        <h6>view all</h6>
      </Box>
      {scorer1}
      {scorer2}
      {scorer3}
    </Paper>
  );
}

export default TopScorer;