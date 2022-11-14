import React from "react";

import styles from "./addPizzaBtn.module.css";
import { OpenModalProps } from "../../pages/admin/index";

interface BtnProps {
	setOpen: (value: OpenModalProps) => void;
}

export const AddPizzaBtn = ({ setOpen }: BtnProps) => {
	return (
		<button
			className={styles.btn}
			onClick={() => setOpen({ edit: false, add: true })}
		>
			Add Pizza
		</button>
	);
};
