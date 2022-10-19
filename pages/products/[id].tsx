import React from "react";
import { useState, useEffect, useRef } from "react";

import { Pizza } from "../../interface";

import Image from "next/image";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import axios from "axios";

import styles from "../../styles/singlePizza.module.css";
import { ExtraOption } from "../../interface/product";

// const pizza = {
// 	id: 1,
// 	img: "/images/pizza-card.png",
// 	title: "neapolitane",
// 	prices: [19.9, 25.9, 30.9],
// 	desc: "Elit laborum consequat proident aute consequat cillum aliqua consequat. Consequat consectetur reprehenderit aute minim labore minim ut commodo pariatur ipsum. In magna Lorem commodo nulla do consequat amet. Fugiat nisi sint voluptate pariatur pariatur pariatur cillum velit amet labore dolore cillum esse ut. Non pariatur aliquip Lorem quis ut officia minim eiusmod nostrud amet enim esse cillum.",
// };

interface PizzaProps {
	pizza: Pizza;
}

const SinglePizza = ({ pizza }: PizzaProps) => {
	const [size, setSize] = useState<0 | 1 | 2>(2);
	const [extraIngredients, setExtraIngredients] = useState<ExtraOption[]>([]);
	const [quantity, setQuantity] = useState<number>(1);

	const addToCart = () => {
		let sizeText = "";
		if (size === 0) {
			sizeText = "small";
		}
		if (size === 1) {
			sizeText = "medium";
		}
		if (size === 2) {
			sizeText = "large";
		}
		const order = {
			pizza: pizza.title,
			size: sizeText,
			extraIngredients,
			quantity,
			total: calcPrice() * quantity,
		};
		console.log("added to cart", order);
	};

	const addExtraPrice = (checked: boolean, ingredient: ExtraOption) => {
		if (checked) {
			setExtraIngredients((prev) => {
				return [...prev, ingredient];
			});
		}
		if (!checked && checked !== undefined) {
			setExtraIngredients((prev) => {
				const removeIngredientSelected = prev.filter(
					(intem) => intem._id !== ingredient._id
				);
				return removeIngredientSelected;
			});
		}
	};
	console.log(extraIngredients);

	const calcPrice = () => {
		let ingredientsValue = 0;
		extraIngredients.map((ingredient) => {
			ingredientsValue = ingredientsValue + ingredient.price[size];
		});

		return pizza.prices[size] + ingredientsValue;
	};

	return (
		<div className="container">
			<div className={`container-center ${styles.singlePizzaContainer}`}>
				{/* PIZZA IMAGE */}
				<div className={styles.imgContainer}>
					<Image
						src={pizza.img}
						alt="pizza"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				{/* PIZZA INFO */}
				<section className={styles.productInfoContainer}>
					{/* info header */}
					<article className={styles.productInfoHeader}>
						<h1 className={styles.title}>{pizza.title}</h1>
						<p className={styles.price}>
							${calcPrice()}
							,0
						</p>
						<p className={styles.description}>{pizza.desc}</p>
					</article>

					{/* SIZES */}
					<article className={styles.sizes}>
						<h1 className={styles.sizesTitle}>Chose the size</h1>
						<div className={styles.sizesContainer}>
							<div
								className={styles.sizeIconContainer}
								onClick={() => setSize(0)}
							>
								<Image
									src="/images/size.png"
									width={30}
									height={30}
									alt="pizza-icon"
								/>
								<p
									className={` ${styles.sizeText} ${
										size === 0 ? styles.isSelected : null
									}`}
								>
									small
								</p>
							</div>
							<div
								className={styles.sizeIconContainer}
								onClick={() => setSize(1)}
							>
								<Image
									src="/images/size.png"
									width={40}
									height={40}
									alt="pizza-icon"
								/>
								<p
									className={` ${styles.sizeText} ${
										size === 1 ? styles.isSelected : null
									}`}
								>
									medium
								</p>
							</div>
							<div
								className={styles.sizeIconContainer}
								onClick={() => setSize(2)}
							>
								<Image
									src="/images/size.png"
									width={50}
									height={50}
									alt="pizza-icon"
								/>
								<p
									className={` ${styles.sizeText} ${
										size === 2 ? styles.isSelected : null
									}`}
								>
									large
								</p>
							</div>
						</div>
					</article>

					{/* additional ingredients */}
					<article className={styles.topingsContainer}>
						<h1 className={styles.topingsTitle}>
							Choose additional ingredients
						</h1>
						<div className={styles.checkBoxesContainer}>
							{pizza.extraOptions.map((ingredient, index) => {
								return (
									<div className={styles.checkBox} key={ingredient._id}>
										<input
											type="checkbox"
											id={ingredient._id}
											onClick={(e) =>
												addExtraPrice(e.currentTarget.checked, ingredient)
											}
										/>
										<label htmlFor={ingredient._id}>{ingredient.topping}</label>
									</div>
								);
							})}
						</div>
					</article>

					<article className={styles.addCartContainer}>
						<input
							type="number"
							className={styles.numberCart}
							min="1"
							max="20"
							onChange={(e) => setQuantity(+e.currentTarget.value)}
							value={quantity}
						/>
						<button className={styles.btnCart} onClick={addToCart}>
							Add to cart
						</button>
					</article>
				</section>
			</div>
		</div>
	);
};
export default SinglePizza;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const res = await axios.get(
		`http://localhost:3000/api/products/${params?.id}`
	);

	return {
		props: {
			pizza: res.data,
		},
	};
};
