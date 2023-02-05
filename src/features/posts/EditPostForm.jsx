import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {postUpdated} from "./postsSlice.js";

export default function ({match}){
    const post = useSelector(state => state.posts.find(post => "" + post.id === "" + match.params.postId))
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch();

    return (
        <section>
            <h2>Edit post</h2>
            <form>
                <label htmlFor="postTitle">Post title:</label>
                <input 
                    type="text"
                    value = {title}
                    id = "postTitle"
                    onChange = {({target}) => setTitle(target.value)} />
                <label htmlFor="postContent">Post content:</label>
                <textarea name="postContent" id="postContent" value = {content} onChange = {({target}) => setContent(target.value)} />
                <button type="button" onClick = {() => dispatch(postUpdated({id : post.id, title : title, content : content}))}>Save</button>
            </form>
        </section>
    )
}