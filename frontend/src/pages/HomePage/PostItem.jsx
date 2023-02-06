import React from 'react'
import styles from "./css/PostItem.module.scss";

function PostItem({post}) {
  return (
    <div className={styles.post__item}>
      <div className = {styles.post__header}>Freddy</div>
      <div className={styles.images}></div>
      <div className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis omnis distinctio quisquam magni eaque incidunt nulla laboriosam rerum eveniet. Cum libero laboriosam molestiae sapiente distinctio voluptate ratione fuga amet dolore.
      </div>
      <div className={styles.footer}></div>
    </div>
  )
}

export default PostItem
