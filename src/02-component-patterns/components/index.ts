import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductCardHOCProps } from "../interfaces/Product";
import { ProductButtons } from "./ProductButtons";
import { ProductImg } from "./ProductImg";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImg } from "./ProductImg";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
	Title: ProductTitle,
	Image: ProductImg,
	Buttons: ProductButtons,
});
