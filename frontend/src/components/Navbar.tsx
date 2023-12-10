import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import LoginRegisterModal from '../components/LoginRegisterModal';

const logo = require('../images/logo.png')

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#9EC8B9',
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#092635',
});

const StyledButton = styled(Button)({
  margin: '0 1rem',
  textDecoration: 'none',
  color: '#5C8374',
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    color: '#092635',
  },
});

const Navbar: React.FC = () => {
  return (
    <StyledAppBar position="sticky" style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
      <Toolbar>
        <StyledTypography variant="h6">
            <img src={logo} alt="Logo" style={{ marginRight: '1rem', width: '70px', height: '70px' }} />
        </StyledTypography>
        <div>
          <StyledButton href="#home">
            Home
          </StyledButton>
          <StyledButton href="#allmovies">
            All Movies
          </StyledButton>
          <StyledButton href="#myaccount">
            <LoginRegisterModal />
          </StyledButton>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
