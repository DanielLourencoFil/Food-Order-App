import { useState } from "react";

import { FaTimes } from "react-icons/fa";

import { Pizza } from "../../interface";

import styles from "./addPizzaModal.module.css";

interface ModalProps {
	setOpen: (value: boolean) => void;
}

export const AddPizzaModal = ({ setOpen }: ModalProps) => {
	// const pizzaDefault = {
	// 	prices: [],
	// };

	const [newPizza, setNewPizza] = useState({} as Pizza);

	const handleNewPizza = (key: string | number, value: string | number) => {
		if (key === "title" || key === "desc" || key === "img") {
			setNewPizza({ ...newPizza, [key]: value });
		}

		if (key === 0 || key === 1 || key === 2) {
			setNewPizza((prev) => {
				prev.prices.push(value);
				return { ...prev };
			});
		}
	};
	console.log(newPizza.prices);

	return (
		<form className={styles.addModal}>
			<button className={styles.closeBtn} onClick={() => setOpen(false)}>
				<FaTimes className={styles.closeBtnIcon} />
			</button>
			<h1 className={styles.title}>add new pizza</h1>
			<label htmlFor="img">Image</label>
			<input
				type="file"
				id="img"
				name="img"
				onChange={(e) => handleNewPizza("title", e.target.value)}
			/>
			<label htmlFor="title">title</label>
			<input
				type="text"
				onChange={(e) => handleNewPizza("title", e.target.value)}
			/>
			<label htmlFor="desc">description</label>
			<textarea
				name="desc"
				id="desc"
				rows={10}
				onChange={(e) => handleNewPizza("desc", e.target.value)}
			/>
			<label htmlFor="prices">prices</label>
			<div className={styles.prices}>
				<input
					type="number"
					placeholder="small"
					onChange={(e) => handleNewPizza(0, +e.target.value)}
				/>
				<input
					type="number"
					placeholder="medium"
					onChange={(e) => handleNewPizza(1, +e.target.value)}
				/>
				<input
					type="number"
					placeholder="large"
					onChange={(e) => handleNewPizza(2, +e.target.value)}
				/>
			</div>
			<label htmlFor="extras">extras</label>
			<div className={styles.extras}>
				<div className={styles.extrasInputs}>
					<input type="text" name="extra" />
					<input type="number" name="extraPrice" placeholder="value" />
					<button>add</button>
				</div>
				<div className={styles.extrasIng}></div>
			</div>
		</form>
	);
};

/*
export interface Pizza {
	_id: string;
	title: string;
	img: string;
	prices: number[];
	desc: string;
	extraOptions: ExtraOption[];
	createdAt: Date | string;
	updatedAt: Date | string;
	__v: number;
}

export interface ExtraOption {
	topping: string;
	price: number[];
	_id: string;
}

*/
