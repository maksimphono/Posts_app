import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { de } from "date-fns/locale";
import { posts as postsData } from "../data/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    return postsData;
});

const postsAdapter = createEntityAdapter();

const PostsSlice = createSlice({
    name : "posts",
    initialState : postsAdapter.getInitialState({status : "idle"}),
    reducers : {},
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                const newPosts = {};
                postsAdapter.setAll(state, action.payload)
                state.status = "idle";
            })
    }
})

export const {} = PostsSlice.actions;

export default PostsSlice.reducer;