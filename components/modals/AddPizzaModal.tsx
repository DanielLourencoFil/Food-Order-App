import { useState } from "react";

import { FaTimes } from "react-icons/fa";

import { OpenModalProps } from "../../pages/admin/index";

import styles from "./addPizzaModal.module.css";

import axios from "axios";
import { log } from "console";
interface ModalProps {
	setOpen: (value: OpenModalProps) => void;
	open: OpenModalProps;
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
export const AddPizzaModal = ({ setOpen, open }: ModalProps) => {
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
		if (key === "img") {
			console.log(value[0]);
			setNewPizza({ ...newPizza, [key]: value[0] });
		}
		if (key === "title" || key === "desc") {
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
	};
	const addTopping = (e: any) => {
		e.preventDefault();
		setNewPizza({
			...newPizza,
			extraOptions: [...newPizza.extraOptions, newTopping],
		});
	};

	const addNewPizza = async (e: any) => {
		e.preventDefault();
		const data = new FormData();
		data.append("file", newPizza.img);
		data.append("upload_preset", "uploads");

		try {
			const uploadRes = await axios.post(
				`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`,
				data
			);
			const { url } = uploadRes.data;
			// setNewPizza({ ...newPizza, img: url });
			const pizza = { ...newPizza, img: url };
			console.log(newPizza, pizza, url);

			await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/products`, pizza);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			className={` ${styles.addPizzaModalContainer} ${
				open.add ? styles.openContainer : null
			}`}
		>
			<form className={styles.addModal}>
				<button
					className={styles.closeBtn}
					onClick={() => setOpen({ edit: false, add: false })}
				>
					<FaTimes className={styles.closeBtnIcon} />
				</button>
				<h1 className={styles.title}>add new pizza</h1>
				<label htmlFor="img">Image</label>
				<input
					type="file"
					id="img"
					name="img"
					onChange={(e) => handleNewPizza("img", e.target.files, 0)}
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
					<div className={styles.extrasInputAndBtnContainer}>
						<div className={styles.extrasInputs}>
							<input
								className={styles.extraIngredient}
								type="text"
								name="extras"
								onChange={(e) => handleNewTopping("topping", e.target.value, 0)}
								placeholder={"Ingredient"}
							/>
							<input
								id="small"
								type="number"
								name="extraPrice"
								placeholder="small"
								onChange={(e) => handleNewTopping("price", +e.target.value, 0)}
							/>
							<input
								id="medium"
								type="number"
								name="extraPrice"
								placeholder="medium"
								onChange={(e) => handleNewTopping("price", +e.target.value, 1)}
							/>
							<input
								id="large"
								type="number"
								name="extraPrice"
								placeholder="large"
								onChange={(e) => handleNewTopping("price", +e.target.value, 2)}
							/>
						</div>
						<button
							className={styles.addExtraBtn}
							onClick={(e) => addTopping(e)}
						>
							add
						</button>
					</div>
					<div className={styles.extraToppingsContainer}>
						{newPizza.extraOptions.map((extra, index) => {
							return (
								<span key={index} className={styles.extraTopping}>
									{extra.topping}
								</span>
							);
						})}
					</div>
				</div>
				<button
					className={styles.addPizzaBtn}
					disabled={newPizza.extraOptions.length < 1}
					onClick={(e) => addNewPizza(e)}
				>
					add new pizza
				</button>
			</form>
		</div>
	);
};
