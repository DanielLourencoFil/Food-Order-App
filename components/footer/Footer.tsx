import React from "react";

import Image from "next/image";

import styles from "./footer.module.css";
import { useLanguage } from "../../context/Language/LanguageContext";

export const Footer = () => {
	const { languageTexts } = useLanguage();
	return (
		<div className={`container ${styles.footer}`}>
			<div className={styles.bgImg}>
				<Image src="/images/bg.png" alt="bg" layout="fill" objectFit="cover" />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.textColumn}>
					<h1 className={styles.moto}>{languageTexts.footer.moto}</h1>
				</div>

				<div className={styles.textColumn}>
					<h1 className={styles.title}>{languageTexts.footer.adress.title}</h1>
					{languageTexts.footer.adress.places.map((place, index) => {
						return (
							<div key={index}>
								{place.adress.map((text, i) => {
									return (
										<p className={styles.text} key={i}>
											{text}
										</p>
									);
								})}
							</div>
						);
					})}
				</div>
				<div className={styles.textColumn}>
					<h1 className={styles.title}>{languageTexts.footer.hours.title}</h1>
					{languageTexts.footer.hours.times.map((item, index) => {
						return (
							<div key={index}>
								{item.time.map((text, i) => {
									return (
										<p className={styles.text} key={i}>
											{text}
										</p>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
