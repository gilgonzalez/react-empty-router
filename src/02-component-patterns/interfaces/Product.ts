import { ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";

export interface PropsProductCard {
	product: Product;
	children?: ReactElement | ReactElement[];
}
export interface Product {
	id: string;
	title: string;
	img?: string;
}

type useProductReturn = ReturnType<typeof useProduct>;

export interface ProductContextProps extends useProductReturn {
	product: Product;
}

export interface ProductCardHOCProps {
	({ children, product }: PropsProductCard): JSX.Element;
	Title: (props: { title?: string }) => JSX.Element;
	Image: (props: { img?: string }) => JSX.Element;
	Buttons: () => JSX.Element;
}
