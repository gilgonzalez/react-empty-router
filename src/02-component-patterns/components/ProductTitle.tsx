import { useContext } from "react";
import { PropsTitle } from "../interfaces/Product";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({title, className, style}: PropsTitle) => {
  const { product } = useContext(ProductContext);
  const productTitle = title ? title : product.title;
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>{productTitle}</span>
  )
}
