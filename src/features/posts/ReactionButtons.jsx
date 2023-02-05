import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlice";

const reactionEmoji = [
    "🐊",
    "🐀",
    "🔥",
    "🔪"
]

export default function ReacttionButtons({post}) {
    const dispatch = useDispatch();

    const reacttionButtons = reactionEmoji.map((emoji, i) => {
        return (
            <button key = {i} type = "button" onClick={() => dispatch(reactionAdded({postId : post.id, reaction : i}))}>{emoji} {post.reactions[i]}</button>
        )
    })

    return <div>{reacttionButtons}</div>
}