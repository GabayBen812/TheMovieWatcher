import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated, user)

  return (
    <div>
        {isAuthenticated ? (
              <p>Welcome, {user?.name ?? 'User'}!</p>
            ) : (
              <Button onClick={() => loginWithRedirect()} color="inherit">
                Login/Register
              </Button>
            )}
    </div>
  )
};

export default LoginButton;