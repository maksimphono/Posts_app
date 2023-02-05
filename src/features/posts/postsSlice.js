import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns";

const initialState = [
    {id : 1, title : "First Post", content : "Hello", user : 1, date : sub(new Date(), {minutes : 10}).toISOString(), reactions : [0, 0, 0, 0]},
    {id : 2, title : "Second Post", content : "More", user : 0, date : sub(new Date(), {minutes : 5}).toISOString(), reactions : [0, 0, 0, 0]},
]

const postsSlice = createSlice({
    name : "posts",
    initialState : initialState,
    reducers : {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                //userId = userId || 0; 
                return {
                    payload : {
                        id : nanoid(),
                        date : new Date().toISOString(),
                        title,
                        content,
                        user : userId,
                        reactions : [0, 0, 0, 0]
                    }
                }
            }
        },
        postUpdated(state, action) {
            const exsistingPost = state.find(post => "" + action.payload.id === "" + post.id);
            exsistingPost.title = action.payload.title;
            exsistingPost.content = action.payload.content;
        },
        reactionAdded(state, action) {
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post => post.id == postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    }

})

export const {postAdded, postUpdated, reactionAdded} = postsSlice.actions;

export default postsSlice.reducer;