import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import "./posts.css";
import ReactionButtons from "./ReactionButtons.jsx";
import TimeAgo from "./TimeAgo";

export default function () {
    const posts = useSelector(state => state.posts);

    const sortedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = sortedPosts.map(post => (
        <article className="post-excerpt" key = {post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <PostAuthor userId = {post.user}/>
            <TimeAgo timestamp = {post.date}/>
            <ReactionButtons post = {post}/>
            <Link to = {"/posts/" + post.id}>View</Link>
        </article>
    ));

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}