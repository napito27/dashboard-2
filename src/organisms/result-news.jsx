import { Box, Paper } from '@mui/material';

function ResultNews({ children }) {
  const [news1, news2] = children;
  
  return (
    <Paper className='scorer-container' sx={{bgcolor:'#F2F2F2'}}>
      <Box className='scorer-header' >
        <h3><strong>Result</strong></h3>
        <h6>view all</h6>
      </Box>
      {news1}
      {news2}
    </Paper>
  );
}

export default ResultNews;