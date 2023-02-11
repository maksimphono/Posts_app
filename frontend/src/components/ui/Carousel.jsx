import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "../css/Carousel.module.scss";
import $ from "jquery";
import { useRef } from 'react';
import EmptyImage from './EmptyImage';
import { useMemo, memo } from 'react';

const UlList = memo(({_key, images, currentIndx, setCurrentImageIndx}) => {
    let refs = useMemo(() => [], []);
    let prevIndx = useMemo(() => currentIndx, []);

    useEffect(() => {
      $(refs[prevIndx]).prop("checked", false);
      $(refs[currentIndx]).prop("checked", true);
      prevIndx = currentIndx;
    }, [currentIndx]);

    return (
        <ul>
            {images.map((image, i) => (
                <li key = {image.id}>
                    <input
                        key = {image.id} 
                        className={styles.switch__images} 
                        name = {"switch__images" + _key}
                        type = "radio"
                        ref = {ref => refs[i] = ref}
                        onClick = {() => setCurrentImageIndx(i)}
                    />
                </li>
            ))}
        </ul>
    )
})

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

  useEffect(() => {
    console.log("Current indx", currentImageIndx);
  }, [currentImageIndx])

  return (
    <div className={styles.carousel} ref = {selfRef}>
      <button className={styles.left} onClick = {() => setCurrentImageIndx(v => (v != 0?(v - 1):(images.length - 1)))}></button>
      <button className={styles.right} onClick = {() => setCurrentImageIndx(v => ((v + 1) % (images.length)))}></button>
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
