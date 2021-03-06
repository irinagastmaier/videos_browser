import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from './commentsSlice';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Stack,
  Heading,
  Box,
} from '@chakra-ui/react';

const AddComment = ({ id }) => {
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  let timer;
  function onSubmit(e) {
    return new Promise((resolve) => {
      dispatch(addComment({ comment: comment, id: id }));
      timer = setTimeout(() => {
        window.location.assign('/comments');
        resolve();
      }, 1500);
      return () => clearTimeout(timer);
    });
  }

  return (
    <Stack
      p={{ base: 4, sm: 6, md: 8 }}
      bg={'alphaBlack.900'}
      rounded={'xl'}
      centerContent
      overflow="hidden"
    >
      <Stack spacing={4} w="100%" height="auto">
        <Heading
          bgGradient="linear(to-l, #50457e, #79cadc)"
          bgClip="text"
          fontWeight="extrabold"
          lineHeight={1.1}
          fontSize={'xl'}
        >
          Leave Your Comment
        </Heading>
        <Box mt={10}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.comment}>
              <Input
                color="white"
                id={id}
                placeholder="Type your comment"
                {...register('comment', {
                  required: 'This is required',
                  minLength: {
                    value: 4,
                    message: 'Minimum length should be 4',
                  },
                })}
                onChange={(e) => setComment(e.target.value)}
              />
              <FormErrorMessage>
                {errors.comment && errors.comment.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              bg="#79cadc"
              colorScheme="blue"
              color="white"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Stack>
    </Stack>
  );
};

export default AddComment;
