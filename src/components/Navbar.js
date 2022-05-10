import { useAuth0 } from '@auth0/auth0-react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

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
        top={0}
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
            {isAuthenticated ? (
              <Box px={2} w={'100%'} mr={2} bg="alphaBlack.700" color="white">
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                  >
                    <HamburgerIcon color="#79cadc" />
                  </MenuButton>
                  <MenuList alignItems={'center'} bg="black" color="#5a6998">
                    <NavLink
                      to="/profile"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      {' '}
                      <MenuItem>Profile</MenuItem>{' '}
                    </NavLink>
                    <NavLink
                      to="/comments"
                      exact
                      activeClassName="router-link-exact-active"
                      _hover={{
                        textDecoration: 'none',
                      }}
                    >
                      <MenuItem>Coments</MenuItem>
                    </NavLink>
                  </MenuList>
                </Menu>
              </Box>
            ) : null}

            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
