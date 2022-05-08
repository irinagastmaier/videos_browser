import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      bg="#79cadc"
      colorScheme="blue"
      color="white"
      onClick={() => loginWithRedirect()}
      id="loginBtn "
    >
      Log In
    </Button>
  );
};

export default LoginButton;
