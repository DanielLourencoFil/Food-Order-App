import styles from "./pizzaCardSection.module.css";

import React from "react";
import { useLanguage } from "../../context/Language/LanguageContext";
import { PizzaCard } from "./PizzaCard";

export const PizzaCardSection = () => {
	const { languageTexts } = useLanguage();

	return (
		<div className={`container ${styles}`}>
			<div className={` container-center ${styles.headerSection}`}>
				<h1 className={styles.title}>{languageTexts.pizzaCardSection.title}</h1>
				<p className={styles.headerDesc}>
					{languageTexts.pizzaCardSection.desc}
				</p>
			</div>
			<div className={`container-center ${styles.pizzaCardContainer}`}>
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
			</div>
		</div>
	);
};
