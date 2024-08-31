import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="h6" paragraph>
          We have received your information and will contact you soon.
        </Typography>
        <Typography variant="body1" paragraph>
          In the meantime, feel free to explore more about our services or contact us if you have any questions.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackHome}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default ThankYou;
