import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { de } from "date-fns/locale";

const postsAdapter = createEntityAdapter();

const PostsSlice = createSlice({
    name : "posts",
    initialState : postsAdapter.getInitialState({status : "idle"}),
    reducers : {
        postsFetched(state, action) {
            postsAdapter.setAll(action.payload);
        }
    }
})

export const {postsFetched} = PostsSlice.actions;

export default PostsSlice.reducer;