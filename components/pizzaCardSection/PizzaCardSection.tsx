import styles from "./pizzaCardSection.module.css";

import React from "react";
import { useLanguage } from "../../context/Language/LanguageContext";
import { PizzaCard } from "./PizzaCard";

import { PizzaList } from "../../interface";

export const PizzaCardSection = ({ pizzaList }: PizzaList) => {
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
				{pizzaList.map((pizza) => {
					return <PizzaCard key={pizza._id} pizza={pizza} />;
				})}
			</div>
		</div>
	);
};
