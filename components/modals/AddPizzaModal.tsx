import { useState } from "react";

import { FaTimes } from "react-icons/fa";

import { Pizza } from "../../interface";

import styles from "./addPizzaModal.module.css";

import axios from "axios";
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
		extraOptions: [],
	};
	const toppingDefault: ExtraOptionDefault = {
		topping: "",
		price: [],
	};
	const [newPizza, setNewPizza] = useState<PizzaDefault>(pizzaDefault);
	const [newTopping, setNewTopping] =
		useState<ExtraOptionDefault>(toppingDefault);

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

	const handleNewTopping = (
		key: string,
		value: string | number,
		index: number
	) => {
		if (key === "topping") {
			setNewTopping({ ...newTopping, topping: value as string });
		}
		if (key === "price") {
			const prices = newTopping.price;
			prices[index] = value as number;
			setNewTopping({ ...newTopping, price: prices });
		}
		// const prices =
		// 	newPizza.extraOptions[newPizza.extraOptions.length - 1].price;
		// prices[index] = key === "price" && value;
		// newTopping[newPizza.extraOptions.length - 1] = {
		// 	topping: toppingTitle,
		// 	price: prices,
		// };
		// const newTopping = newPizza.extraOptions;
		// // let toppingTitle = key === "topping" && value;
		// let toppingTitle = "";
		// if (key === "topping") {
		// 	toppingTitle = value;
		// }
		// const prices =
		// 	newPizza.extraOptions[newPizza.extraOptions.length - 1].price;
		// prices[index] = key === "price" && value;
		// newTopping[newPizza.extraOptions.length - 1] = {
		// 	topping: toppingTitle,
		// 	price: prices,
		// };
	};
	const addTopping = (e: any) => {
		e.preventDefault();
		setNewPizza({
			...newPizza,
			extraOptions: [...newPizza.extraOptions, newTopping],
		});
	};
	// console.log(newTopping);
	console.log(newPizza);

	const addNewPizza = async () => {
		await axios.post("http://localhost:3000/api/products", newPizza);
	};
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
						onChange={(e) => handleNewTopping("topping", e.target.value, 0)}
					/>
					<input
						type="number"
						name="extraPrice"
						placeholder="small"
						onChange={(e) => handleNewTopping("price", +e.target.value, 0)}
					/>
					<input
						type="number"
						name="extraPrice"
						placeholder="medium"
						onChange={(e) => handleNewTopping("price", +e.target.value, 1)}
					/>
					<input
						type="number"
						name="extraPrice"
						placeholder="large"
						onChange={(e) => handleNewTopping("price", +e.target.value, 2)}
					/>
					<button onClick={(e) => addTopping(e)}>add</button>
				</div>
				<div className={styles.extrasIng}>
					{newPizza.extraOptions.map((extra, index) => {
						return <span key={index}>{extra.topping}</span>;
					})}
				</div>
			</div>
			<button onClick={addNewPizza}>Add new pizza</button>
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
