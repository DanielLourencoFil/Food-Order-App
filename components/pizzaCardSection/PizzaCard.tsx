import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./pizzaCard.module.css";
import { useLanguage } from "../../context";
import { Pizza } from "../../interface";

interface PizzaProps {
	pizza: Pizza;
}

export const PizzaCard = ({ pizza }: PizzaProps) => {
	const { languageTexts } = useLanguage();

	return (
		<Link href={`/products/${pizza._id}`}>
			<div className={styles.card}>
				<Image src={pizza.img} alt={pizza.title} width={200} height={200} />
				<h1 className={styles.cardTitle}>{pizza.title}</h1>
				<p className={styles.cardPrice}>{`$ ${pizza.prices[0]},0`}</p>
				<p className={styles.cardDesc}>{pizza.desc}</p>
			</div>
		</Link>
	);
};
