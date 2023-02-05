import {useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ({match}) {
    const {postId} = match.params;
    const post = useSelector(state => state.posts.find(post => "" + post.id === "" + postId))
    const author = useSelector(state => state.users.find(user => "" + post.user === "" + user.id))

    if (!post) {
        return (
            <section>
                <h2>Post not found ;(</h2>
            </section>
        )
    }

    return (
        <section>
            <article className = "post">
                <h2>{post.title}</h2>
                <p className = "posts-content">{post.content}</p>
                <Link to = {"/editPost/" + postId}>Edit post</Link>
            </article>
        </section>
    )
}