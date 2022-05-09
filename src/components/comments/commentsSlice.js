import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      const newComment = {
        id: action.payload.comment,
        comment: action.payload.comment,
      };
      state.push(newComment);
    },
    deleteComment: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addComment, deleteComment } = commentsSlice.actions;

export default commentsSlice.reducer;
