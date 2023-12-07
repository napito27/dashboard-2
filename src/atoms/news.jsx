import { Box } from '@mui/material';

function News({data}) {
  const {title, body} = data ?? {};

  return (
    <Box className='news'>
      <h3>{title}</h3>
      <p>{body}</p>
    </Box>
  );
}

export default News;