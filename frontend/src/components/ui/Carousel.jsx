import React, { lazy, useEffect, useState, useMemo, memo } from 'react'
import styles from "../css/Carousel.module.scss";
import $ from "jquery";
const EmptyImage = lazy(() => import('./EmptyImage'));

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
                        ref = {ref => !refs[i] && (refs[i] = ref)}
                        onClick = {() => setCurrentImageIndx(i)}
                    />
                </li>
            ))}
        </ul>
    )
})

function Carousel({_key, images}) {
  const [currentImageIndx, setCurrentImageIndx] = useState(0);

  return (
    <div className={styles.carousel}>
      <button 
        className={styles.left} 
        onClick = {() => setCurrentImageIndx(v => (v?(v - 1):(images.length - 1)))}
      />
      <button 
        className={styles.right} 
        onClick = {() => setCurrentImageIndx(v => ((v + 1) % (images.length)))} 
      />
      {images.length
        ? 
        <>
            <img className = "" src={images[currentImageIndx]?.src} alt={currentImageIndx} />
            <UlList 
              _key = {_key} 
              images = {images} 
              currentIndx = {currentImageIndx} 
              setCurrentImageIndx = {setCurrentImageIndx} />
        </>
        :
        <EmptyImage />
      }
      
    </div>
  )
}

export default Carousel
