import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, blue.300, blue.500)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2} color='gray.100'>
        Page Not Found
      </Text>
      <Link to="/">
        <Button
          colorScheme="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
}