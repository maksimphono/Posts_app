import React from 'react'
import styles from "./css/PostItem.module.scss";

function PostItem({post}) {
  return (
    <div className={styles.post__item}>
      <div className = {styles.post__header}>Freddy</div>
      <div className={styles.images}>
        <img src="https://th.bing.com/th/id/R.cf9eb0f2dabb9017eae919121bdff925?rik=y7xMZzy3bOXmXA&riu=http%3a%2f%2fwww.voyageurtripper.com%2fwp-content%2fuploads%2f2021%2f05%2fBest-Viewpoints-in-Vancouver-Jerico-Beach-3.jpg&ehk=LhvugNm03B9Yc6PInxnjlErtgO8d0R7Ty79wt8mwivQ%3d&risl=&pid=ImgRaw&r=0" alt="" />
      </div>
      <div className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis omnis distinctio quisquam magni eaque incidunt nulla laboriosam rerum eveniet. Cum libero laboriosam molestiae sapiente distinctio voluptate ratione fuga amet dolore.
      </div>
      <div className={styles.footer}></div>
    </div>
  )
}

export default PostItem
