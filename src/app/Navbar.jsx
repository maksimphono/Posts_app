import {Link} from "react-router-dom";
import styles from "./navbar.module.css";

export default function () {
    return (
        <nav className={styles.nav}>
            <Link className={styles.Link} to = "/" >Home</Link>
        </nav>
    )
}