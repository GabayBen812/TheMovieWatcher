// LoginRegisterModal.tsx

import React, { useState } from 'react';
import { Dialog, DialogContent, Typography, TextField, Button, styled } from '@mui/material';

const StyledDialogContent = styled(DialogContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
});

const LoginRegisterModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} color="inherit">
        Login/Register
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <StyledDialogContent>
          <Typography variant="h5" gutterBottom>
            Login/Register
          </Typography>
          <TextField label="Username" variant="outlined" margin="normal" />
          <TextField label="Password" type="password" variant="outlined" margin="normal" />
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Login
          </Button>
          {/* Add your registration form or additional buttons as needed */}
        </StyledDialogContent>
      </Dialog>
    </div>
  );
};

export default LoginRegisterModal;
