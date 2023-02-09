import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostItem from './PostItem';
import styles from "./css/index.module.scss"
import $ from "jquery";
import { fetchPosts } from '../../context/postsSlice';

import {posts as postsData} from "../../data/posts.js";

function HomePageScene({posts}) {
  useEffect(() => console.log(posts), [])
    
    if (!posts) {
      return <h1>Loading</h1>
    }
    return (
    
    <div className = {styles.post__list}>
      {posts?.ids?.map(item => (
        <PostItem post = {posts.entities[item]} />
      ))}
    </div>
    
  )
}

export default function HomePage(props){
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    console.log(postsData)
    dispatch(fetchPosts());
    console.log(posts.entities)
  }, []);

  return <HomePageScene posts = {posts}/>
}
