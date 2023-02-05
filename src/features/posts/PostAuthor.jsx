import { useSelector } from "react-redux";

export default function ({userId}) {
    const author = useSelector(state => state.users.find(user => "" + userId === "" + user.id));
    return <span>By {author?.name || "Unknown"}</span>
}
    