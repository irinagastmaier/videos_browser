import { Box, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Spinner color='teal.500' />
    </Box>
  );
}
