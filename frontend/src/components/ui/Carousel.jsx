import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "../css/Carousel.module.scss";
import $ from "jquery";
import { useRef } from 'react';
import EmptyImage from './EmptyImage';
import { useId } from 'react';

function Carousel({_key, images}) {
  const [currentImageIndx, setCurrentImageIndx] = useState(0);


  return (
  
    <div className={styles.carousel}>
      <button className={styles.left}>l</button>
      <button className={styles.right}>r</button>
      {images.length
        && 
        <>
            <img className = {styles.image} src={images[currentImageIndx]?.src} alt={currentImageIndx} />
            <ul>
            {images.map((image, i) => (
                <li key = {image.id}>
                    <input
                        key = {image.id} 
                        className={styles.switch__images} 
                        name = {"switch__images" + _key}
                        type = "radio"
                        checked = {i == 0}
                        onChange = {() => setCurrentImageIndx(image.id)}
                    />
                </li>
            ))}
            </ul>
        </>
        || <EmptyImage />
      }
      
    </div>
  )
}

export default Carousel
