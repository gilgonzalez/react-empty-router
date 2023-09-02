import { useState } from "react";

export const useProduct = () => {
	const [counter, setCounter] = useState(0);
	const changeValue = (value: number) => {
		if (value < 0 && counter === 0) return;
		setCounter((prev) => prev + value);
	};

	return {
		counter,
		changeValue,
	};
};
