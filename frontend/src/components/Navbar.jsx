import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Home, PersonAdd } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
       
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: '40px', width: 'auto', marginLeft: '-20px' }} // Adjust margin as needed
                />
              </Link>
            </Typography>
          </Box>

          <Button color="inherit" component={Link} to="/">
            <Home sx={{ mr: 1 }} />
            Home
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            <PersonAdd sx={{ mr: 1 }} />
            Sign Up
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
