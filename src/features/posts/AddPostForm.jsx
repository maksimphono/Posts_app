import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function () {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState();
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const onTitleChange = event => {
        setTitle(event.target.value);
    }
    const onContentChange = event => {
        setContent(event.target.value);
    }
    const onAuthorChange = ({target}) => {
        setUserId(target.value);
    }

    const usersOption = users.map(user => (
        <option key = {user.id} value={user.id}>{user.name}</option>
    ))

    return (
        <section>
            <h2>
                Add new post
            </h2>
            <form action="">
                <label hrmlFor = "postTitle">Post Title:</label>
                <input 
                    type="text" 
                    id = "postTitle"
                    name = "postTitle"
                    value = {title}
                    onChange = {onTitleChange}
                />
                <label hrmlFor = "postContent">Post Content:</label>
                <textarea 
                    id = "postCountent"
                    name = "postContent"
                    value = {content}
                    onChange = {onContentChange}
                />
                <label htmlFor="postAuthor">Select author</label>
                <select name="postAuthor" id="postAuthor" onChange={onAuthorChange}>
                    <option value=""></option>
                    {usersOption}
                </select>
                
                <button 
                    type="button" 
                    onClick = {() => dispatch(postAdded(title, content, userId))}>
                    Save
                </button>
            </form>
        </section>
    )
}