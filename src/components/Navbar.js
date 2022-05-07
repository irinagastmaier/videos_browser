import {
  Box,
  Flex,
  Image,
  Link,
  Button,
  Stack,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const NavLink = ({ to, children }) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    to={to}
  >
    {children}
  </Link>
);

export function Navbar() {
  return (
    <>
      <Box bg="black" color="white" px={4}>
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
              <Button bg="#79cadc" colorScheme="blue" color="white">
                Sign In
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
