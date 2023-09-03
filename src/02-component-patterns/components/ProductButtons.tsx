import { useContext } from "react";
import { PropsButtons } from "../interfaces/Product";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductButtons = ({className, style, styleButtons, counterStyle} : PropsButtons) => {
  const {changeValue, counter} = useContext(ProductContext);
  return (
    <div className={ `${styles.buttonsContainer} ${className}`} style={style}>
        <button style={styleButtons} onClick={() => changeValue(-1)} type='button' className={styles.buttonMinus}> - </button>
        <div style={counterStyle}  className={styles.countLabel}>{counter}</div>
        <button style={styleButtons} onClick={() => changeValue(1)} type='button' className={styles.buttonAdd}>  + </button>
      </div>
  )
}