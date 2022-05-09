import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers:{
    addComment: (state, action)=>{
        const newComment = {
            id: new Date(),
            name: action.payload.comment
        }
        state.push(newComment);
    },
    deleteComment: (state, action)=>{
        return state.filter((item) => item.id !== action.payload.id);
    }
}
});

export const {addComment, deleteComment} = commentsSlice.actions;

export default commentsSlice.reducer;