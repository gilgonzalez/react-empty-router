import { useContext } from "react";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductImg = ({img} : {img?: string}) => {
  const { product } = useContext(ProductContext);
  const { img : productImage } = product
  const imgToShow = img ? img : productImage

  return (
    <img src={imgToShow ? imgToShow : noImage} alt="Product img" className={styles.productImg} />
  )
}