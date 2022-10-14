import React from "react";
import Image from "next/image";

import styles from "./pizzaCard.module.css";
import { useLanguage } from "../../context";

export const PizzaCard = () => {
	const { languageTexts } = useLanguage();
	return (
		<div className={styles.card}>
			<Image src="/images/pizza.png" alt="pizza" width={200} height={200} />
			<h1 className={styles.cardTitle}>
				{languageTexts.pizzaCardSection.pizzaCard.tittle}
			</h1>
			<p
				className={styles.cardPrice}
			>{`$ ${languageTexts.pizzaCardSection.pizzaCard.price}`}</p>
			<p className={styles.cardDesc}>
				{languageTexts.pizzaCardSection.pizzaCard.desc}
			</p>
		</div>
	);
};
