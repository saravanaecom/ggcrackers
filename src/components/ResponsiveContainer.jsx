import { Container, Box } from '@mui/material';

const ResponsiveContainer = ({ children, maxWidth = "xl", sx = {}, ...props }) => {
  return (
    <Container 
      maxWidth={maxWidth}
      sx={{
        px: { xs: 1, sm: 2, md: 3 },
        width: '100%',
        maxWidth: '100%',
        ...sx
      }}
      {...props}
    >
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        {children}
      </Box>
    </Container>
  );
};

export default ResponsiveContainer;