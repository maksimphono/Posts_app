import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./context/postsSlice.js";

export default configureStore({
    reducer : {
        posts : PostsReducer
    }
})