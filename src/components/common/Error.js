import { Alert, Stack } from '@chakra-ui/react';

export default function Error(error) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert status="error">{error}!</Alert>
    </Stack>
  );
}
