import { useState, useEffect } from "react";

import Image from "next/image";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import styles from "./hero.module.css";
import { useLanguage } from "../../context/Language/LanguageContext";

export const Hero = () => {
	const { languageTexts } = useLanguage();
	const [sliding, setSliding] = useState<number>(0);

	const checkSlider = (side: string) => {
		if (sliding <= -200 && side === "right") {
			setSliding(0);
			return;
		}
		if (sliding >= 0 && side === "left") {
			setSliding(-200);
			return;
		}
	};

	// useEffect(() => {
	// 	const autoSlide = setInterval(() => {
	// 		setSliding(sliding - 100);
	// 		if (sliding <= -200) {
	// 			setSliding(0);
	// 		}
	// 	}, 10000);
	// 	return () => clearInterval(autoSlide);
	// }, [sliding]);

	const slider = (side: "right" | "left") => {
		if (side === "right") {
			setSliding(sliding - 100);
		}
		if (side === "left") {
			setSliding(sliding + 100);
		}
		checkSlider(side);
	};

	return (
		<div className={`container ${styles.heroContainer} `}>
			<BsChevronCompactLeft
				className={styles.arrowIcon}
				style={{ left: "-20px" }}
				onClick={() => slider("left")}
			/>
			<BsChevronCompactRight
				className={styles.arrowIcon}
				onClick={() => slider("right")}
			/>
			<div className={`${styles.hero}`}>
				{/* SLIDE 01 */}
				<div
					className={`${styles.slide} ${styles.slide01}`}
					style={{ transform: `translateX(${sliding}%)` }}
				>
					<div className={styles.slideTextContainer}>
						<h2 className={styles.text01}>{languageTexts.hero.slide01[0]}</h2>
						<h1 className={styles.text02}>{languageTexts.hero.slide01[1]}</h1>
						<div className={styles.underline}></div>
						<p className={styles.text03}>{languageTexts.hero.slide01[2]}</p>
						<p className={styles.text04}>{languageTexts.hero.slide01[3]}</p>
					</div>
					<div className={styles.imageContainer}>
						<div className={styles.pizzaContainer}>
							<Image
								src="/images/pizza05.png"
								// width={475}
								// height={350}
								layout="fill"
								alt="pizza"
								objectFit="contain"
							/>
						</div>

						<div className={styles.spiceImg}>
							<Image
								src="/images/chilli02.png"
								// width={200}
								// height={150}
								layout="fill"
								alt="pizza"
								objectFit="contain"
							/>
						</div>
					</div>
				</div>

				{/* SLIDE 02 */}
				<div
					className={`${styles.slide} ${styles.slide02}`}
					style={{ transform: `translateX(${sliding + 100}%)` }}
				>
					<div className={`${styles.imageContainer} ${styles.pizzaContainer}`}>
						<Image
							src="/images/pizza01.png"
							width={475}
							height={350}
							alt="pizza"
							objectFit="contain"
						/>
					</div>
					<div className={styles.slideTextContainer}>
						<p className={styles.text01}>{languageTexts.hero.slide02[0]}</p>
						<p className={styles.text01}>{languageTexts.hero.slide02[1]}</p>
						<h1 className={styles.text02}>{languageTexts.hero.slide02[2]}</h1>
						<p className={styles.text01}>{languageTexts.hero.slide02[3]}</p>
					</div>
				</div>

				{/* SLIDE 03 */}
				<div
					className={`${styles.slide} ${styles.slide03}`}
					style={{ transform: `translateX(${sliding + 200}%)` }}
				>
					<div className={`${styles.imageContainer} ${styles.pizzaContainer}`}>
						<Image
							src="/images/pizza04.png"
							layout="fill"
							alt="pizza"
							objectFit="contain"
						/>

						<div className={styles.smallPizzaImg}>
							<Image
								src="/images/pizza05.png"
								layout="fill"
								alt="pizza"
								objectFit="contain"
							/>
						</div>
					</div>
					<div className={styles.slideTextContainer}>
						<p className={styles.text01}>{languageTexts.hero.slide03[0]}</p>
						<p className={styles.text01}>{languageTexts.hero.slide03[1]}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
