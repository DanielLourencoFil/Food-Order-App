import React from "react";

import { FaTimes } from "react-icons/fa";

import styles from "./addPizzaModal.module.css";

interface ModalProps {
	setOpen: (value: boolean) => void;
}

export const AddPizzaModal = ({ setOpen }: ModalProps) => {
	const handleNewPizza = (e: any) => {
		e.preventDefault();
	};
	return (
		<form className={styles.addModal} onClick={(e) => handleNewPizza(e)}>
			<button className={styles.closeBtn} onClick={() => setOpen(false)}>
				<FaTimes className={styles.closeBtnIcon} />
			</button>
			<h1 className={styles.title}>add new pizza</h1>
			<label htmlFor="image">Image</label>
			<input type="file" id="image" name="image" />
			<label htmlFor="title">title</label>
			<input type="text" />
			<label htmlFor="desc">description</label>
			<textarea name="desc" id="desc" rows={10} />
			<label htmlFor="prices">prices</label>
			<div className={styles.prices}>
				<input type="number" placeholder="small" />
				<input type="number" placeholder="medium" />
				<input type="number" placeholder="large" />
			</div>
			<label htmlFor="extras">extras</label>
			<div className={styles.extras}>
				<input type="text" name="extra" />
				<input type="number" name="extraPrice" placeholder="value" />
				<button>add</button>
			</div>
		</form>
	);
};
