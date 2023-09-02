import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductButtons = () => {
  const {changeValue, counter} = useContext(ProductContext);
  return (
    <div className={styles.buttonsContainer}>
        <button onClick={() => changeValue(-1)} type='button' className={styles.buttonMinus}>-</button>
        <div className={styles.countLabel}>{counter}</div>
        <button onClick={() => changeValue(1)} type='button' className={styles.buttonAdd}>+</button>
      </div>
  )
}