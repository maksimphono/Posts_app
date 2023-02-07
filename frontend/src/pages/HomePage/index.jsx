import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostItem from './PostItem';
import styles from "./css/index.module.scss"

export default function HomePage() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    return (
    <div className = {styles.post__list}>
      <PostItem post = {posts[0]} />
      <PostItem post = {posts[0]} />
    </div>
  )
}
