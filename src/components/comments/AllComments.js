import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const AllComments = () => {
  const comments = useSelector((state) => {
    return state.comments;
  });

  return (
    <Container maxW="full" mt={0} pt="5rem" centerContent overflow="hidden">
      <Flex width={'100%'} direction={'row'} wrap={'wrap'} align={'center'}>
        <Box
          bg="black"
          color="white"
          borderRadius="lg"
          m={{ sm: 10, md: 16, lg: 10 }}
          p={{ sm: 10, md: 5, lg: 16 }}
        >
          <Stack>
            <Heading
              bgGradient="linear(to-l, #50457e, #79cadc)"
              bgClip="text"
              fontWeight="extrabold"
              lineHeight={1.1}
              fontSize={'xl'}
              p={[5, 0, 0]}
              minW={['15rem', '20rem', '40rem']}
            >
              Comments
            </Heading>
            <Stack padding={'2rem'}>
              {comments.map((item, i) => (
                <Box pb={4}>
                  <Text key={i} fontSize={'l'} className="movie-title">
                    {item.comment.id}
                  </Text>
                  <Text fontSize={'md'}>{item.comment.comment}</Text>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default AllComments;
