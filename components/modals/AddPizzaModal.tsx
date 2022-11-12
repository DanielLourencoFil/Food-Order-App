import { useState } from "react";

import { FaTimes } from "react-icons/fa";

import { Pizza } from "../../interface";

import styles from "./addPizzaModal.module.css";
import { log } from "console";

interface ModalProps {
	setOpen: (value: boolean) => void;
}
interface PizzaDefault {
	title: string;
	img: string;
	prices: number[];
	desc: string;
	extraOptions: ExtraOptionDefault[];
}
interface ExtraOptionDefault {
	topping: string;
	price: number[];
}
export const AddPizzaModal = ({ setOpen }: ModalProps) => {
	const pizzaDefault: PizzaDefault = {
		title: "",
		img: "",
		prices: [],
		desc: "",
		extraOptions: [{ topping: "", price: [] }],
	};

	const [newPizza, setNewPizza] = useState<PizzaDefault>(pizzaDefault);

	const handleNewPizza = (key: string | number, value: any, index: number) => {
		if (key === "title" || key === "desc" || key === "img") {
			setNewPizza({ ...newPizza, [key]: value });
		}

		if (key === "prices") {
			const updatedPrices = newPizza.prices;
			updatedPrices[index] = value;
			setNewPizza({
				...newPizza,
				prices: updatedPrices,
			});
		}
		if (key === "extrasTopping") {
			const extras = { topping: value, price: [] };

			setNewPizza({ ...newPizza, extraOptions: [extras] });
		}
	};

	const handleNewTopping = () => {};
	console.log(newPizza);

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
				onChange={(e) => handleNewPizza("img", e.target.value, 0)}
			/>
			<label htmlFor="title">title</label>
			<input
				type="text"
				onChange={(e) => handleNewPizza("title", e.target.value, 0)}
			/>
			<label htmlFor="desc">description</label>
			<textarea
				name="desc"
				id="desc"
				rows={10}
				onChange={(e) => handleNewPizza("desc", e.target.value, 0)}
			/>
			<label htmlFor="prices">prices</label>
			<div className={styles.prices}>
				<input
					type="number"
					placeholder="small"
					value={newPizza.prices[0]}
					onChange={(e) => handleNewPizza("prices", +e.target.value, 0)}
				/>
				<input
					type="number"
					placeholder="medium"
					onChange={(e) => handleNewPizza("prices", +e.target.value, 1)}
				/>
				<input
					type="number"
					placeholder="large"
					onChange={(e) => handleNewPizza("prices", +e.target.value, 2)}
				/>
			</div>
			<label htmlFor="extras">extras</label>
			<div className={styles.extras}>
				<div className={styles.extrasInputs}>
					<input
						type="text"
						name="extras"
						onChange={(e) => handleNewPizza("extrasTopping", e.target.value, 0)}
					/>
					<input
						type="number"
						name="extraPrice"
						placeholder="small"
						onChange={(e) => handleNewTopping("extras", +e.target.value, 0)}
					/>
					<input
						type="number"
						name="extraPrice"
						placeholder="medium"
						onChange={(e) => handleNewTopping("extras", +e.target.value, 1)}
					/>
					<input
						type="number"
						name="extraPrice"
						placeholder="large"
						onChange={(e) => handleNewTopping("extras", +e.target.value, 2)}
					/>
					<button onClick={() => console.log(newPizza.extraOptions)}>
						add
					</button>
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
