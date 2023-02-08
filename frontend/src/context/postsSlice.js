import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { de } from "date-fns/locale";

const postsAdapter = createEntityAdapter();

const PostsSlice = createSlice({
    name : "posts",
    initialState : postsAdapter.getInitialState({status : "idle"}),
    reducers : {
        fetchPosts(state, action) {
            postsAdapter.setAll(state, action.payload);
        }
    }
})

export const {fetchPosts} = PostsSlice.actions;

export default PostsSlice.reducer;