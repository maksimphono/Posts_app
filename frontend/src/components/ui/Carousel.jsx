import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "../css/Carousel.module.scss";
import $ from "jquery";
import { useRef } from 'react';
import EmptyImage from './EmptyImage';
import { useId, memo } from 'react';
import { useMemo } from 'react';

function useRefs(number, refs = []) {
  refs = [...new Array(number).fill([useRef(null)])];
  return refs;
}

const UlList = ({_key, images, currentIndx, setCurrentImageIndx}) => {
    return (
        <ul id = "ul_select">
            {images.map((image, i) => (
                <li key = {image.id}>
                    <input
                        key = {image.id} 
                        className={styles.switch__images} 
                        name = {"switch__images" + _key}
                        type = "radio"
                        checked = {i == +currentIndx}
                        onClick = {() => setCurrentImageIndx(i)}
                    />
                </li>
            ))}
        </ul>
    )
}

function Carousel({_key, images}) {
  const [currentImageIndx, setCurrentImageIndx] = useState(0);
  const selfRef = useRef(null);
  const imgRef = useRef(null);

  const switchImage = (direction) => {
    return () => {
      switch(direction) {
        case "left":
          setCurrentImageIndx(v => (v != 0?(v - 1):(images.length - 1)));
          break;
        case "right":
          setCurrentImageIndx(v => ((v + 1) % (images.length)));
          break;
      }
    }
  }

  return (
    <div className={styles.carousel} ref = {selfRef}>
      <button className={styles.left} onClick = {switchImage("left")}></button>
      <button className={styles.right} onClick = {switchImage("right")}></button>
      {images.length
        && 
        <>
            <img ref = {imgRef} className = "" src={images[currentImageIndx]?.src} alt={currentImageIndx} />
            <UlList _key = {_key} images = {images} currentIndx = {currentImageIndx} setCurrentImageIndx = {setCurrentImageIndx} />
        </>
        || <EmptyImage />
      }
      
    </div>
  )
}
//
export default Carousel
