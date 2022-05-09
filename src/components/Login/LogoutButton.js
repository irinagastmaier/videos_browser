import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Link to="/">
      <Button
        bg="#79cadc"
        colorScheme="blue"
        color="white"
        onClick={() => logout()}
        id="logoutBtn "
      >
        Log Out
      </Button>
    </Link>
  );
};

export default LogoutButton;
