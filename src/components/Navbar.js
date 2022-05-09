import { useAuth0 } from '@auth0/auth0-react';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import LoginButton from './Login/LoginButton';
import LogoutButton from './Login/LogoutButton';

const NavLink = ({ to, children }) => (
  <Link as={RouterLink} px={2} py={1} to={to}>
    {children}
  </Link>
);

function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Box
        bg="black"
        color="white"
        px={4}
        position="fixed"
        as="header"
        w="100%"
        mt={-2}
        zIndex={1}
      >
        <Flex
          h={20}
          alignItems={'center'}
          justifyContent={'space-between'}
          minW="13rem"
        >
          <NavLink to="/">
            <Image
              src={logo}
              alt="videos_browser_logo"
              boxSize="4rem"
              w="auto"
            />
          </NavLink>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {isAuthenticated ? (
                <>
                  <NavLink
                    to="/comments"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Commments
                  </NavLink>
                  <NavLink
                    to="/profile"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </NavLink>
                </>
              ) : null}
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
