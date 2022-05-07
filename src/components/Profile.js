import {
  Container,
  Flex,
  Box,
  VStack,
  Wrap,
  WrapItem,
  Avatar,
  Stack,
  Badge,
  Text,
} from '@chakra-ui/react';

import { BsPerson } from 'react-icons/bs';
import { useAuth0 } from '@auth0/auth0-react';
//import Highlight from './Highlight';

export default function Profile() {
  const { user } = useAuth0();
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="black"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={0}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <Avatar
                        size={'xl'}
                        src={user.picture}
                        alt={'Profile'}
                        mb={4}
                        pos={'relative'}
                      />

                      <Stack
                        align={'center'}
                        justify={'center'}
                        direction={'row'}
                        mt={6}
                      >
                        <Badge px={2} py={1} fontWeight={'400'}>
                          <BsPerson color="gray.800" />
                        </Badge>
                        <Badge px={2} py={1} fontWeight={'400'}>
                          {user.name}
                        </Badge>
                        <Text textAlign={'center'} px={3}>
                          {user.email}
                        </Text>
                      </Stack>
                      {/* <Highlight>{JSON.stringify(user, null, 2)}</Highlight> */}
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
