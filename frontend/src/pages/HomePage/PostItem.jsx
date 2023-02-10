import React from 'react'
import styles from "./css/PostItem.module.scss";
import home_icon from "../../assets/icons/icons8-home.svg";
import search_icon from "../../assets/icons/icons8-search.svg"
import Carousel from '../../components/ui/Carousel';
import {images} from "../../data/images.js";
import { useEffect } from 'react';

function PostItem({_key, post}) {

  return (
    <div className={styles.post__item}>
      <div className = {styles.post__header}>
        <img className="avatar" src={home_icon} alt="Imagee" />
        {post.user}
      </div>
      <div className={styles.images}>
        <Carousel _key = {_key} images = {images} />
      </div>
      <div className={styles.content}>
        {post.content}
      </div>
      <div className={styles.footer}>
        <img src={home_icon} alt="" />
        <img src={search_icon} alt="" />
        <img src={search_icon} alt="" />
      </div>
    </div>
  )
}

export default PostItem
