import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    selectCount
} from "./counterSlice.js";
import styles from "./counter.module.css";

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("2");

    return (
        <div className={styles.row}>
            <button className={styles.button} onClick = {() => dispatch(incrementByAmount(incrementAmount))}>Add {incrementAmount}</button>
            <input type="text" className={styles.textbox} value = {incrementAmount} onChange = {e => setIncrementAmount(e.target.value)}
            />
            <button className = {styles.button} aria-label="Increment value" onClick = {()=> dispatch(increment())}>
                Plus 1
            </button>
            <span className={styles.value}>{count}</span>
            <button 
                className={styles.button} 
                aria-label="Decrement value" 
                onClick = {() => dispatch(decrement())}>
                Minus 1
            </button>
        </div>
    )
}