import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const AllComments = () => {
  const comments = useSelector((state) => {
    return state.comments;
  });

  console.log(comments);

  return (
    <Container maxW="full" mt={0} pt='5rem' centerContent overflow="hidden">
      <Flex width="100%" direction={'row'} wrap={'wrap'}>
        <Box
          bg="black"
          color="white"
          borderRadius="lg"
          m={{ sm: 10, md: 16, lg: 10 }}
          p={{ sm: 10, md: 5, lg: 16 }}
        >
          {comments.map((item, i) => (
            <Stack>
              <Text key={i} style={{ color: 'white' }}>
                movie: {item.comment.id}
              </Text>
              <Text>{item.comment.comment}</Text>
            </Stack>
          ))}
        </Box>
      </Flex>
    </Container>
  );
};

export default AllComments;
