import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      bg="#79cadc"
      colorScheme="blue"
      color="white"
      onClick={() => logout()}
      id="loginBtn "
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;