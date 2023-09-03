import { ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";

export interface PropsProductCard {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: React.CSSProperties;
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

export interface PropsTitle {
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

export interface PropsImage {
	img?: string;
	className?: string;
	style?: React.CSSProperties;
}

export interface PropsButtons {
	className?: string;
	style?: React.CSSProperties;
	styleButtons?: React.CSSProperties;
	counterStyle?: React.CSSProperties;
}

export interface ProductCardHOCProps {
	({ children, product, style }: PropsProductCard): JSX.Element;
	Title: (Props: PropsTitle) => JSX.Element;
	Image: (Props: PropsImage) => JSX.Element;
	Buttons: (Props: PropsButtons) => JSX.Element;
}
