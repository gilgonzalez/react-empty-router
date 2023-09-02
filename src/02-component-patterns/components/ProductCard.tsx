
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, PropsProductCard } from '../interfaces/Product';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard = ({product, children} : PropsProductCard) => {

  const {counter,changeValue} = useProduct()

  return (
    <Provider value={{
      counter, changeValue, product
    }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}





