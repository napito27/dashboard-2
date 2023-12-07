import { Box, Paper } from '@mui/material'
import News from '../atoms/news';

function ResultNews({data}) {
  const [news1, news2] = data;
  
  return (
    <Paper className='scorer-container' sx={{bgcolor:'#F2F2F2'}}>
      <Box className='scorer-header' >
        <h3><strong>Result</strong></h3>
        <h6>view all</h6>
      </Box>
      <News data={news1}/>
      <News data={news2}/>
    </Paper>
  );
}

export default ResultNews;