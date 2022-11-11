import React from "react";

import styles from "./addPizzaBtn.module.css";

interface BtnProps {
	setOpen: (value: boolean) => void;
}

export const AddPizzaBtn = ({ setOpen }: BtnProps) => {
	return (
		<button className={styles.btn} onClick={() => setOpen(true)}>
			Add Pizza
		</button>
	);
};
