import React from "react";
import Image from "next/image";
import styles from "../../styles/singlePizza.module.css";
import { useState } from "react";

const singleProduct = {
	id: 1,
	img: "/images/pizza-card.png",
	title: "campagnola",
	prices: [19.9, 25.9, 30.9],
	desc: "Elit laborum consequat proident aute consequat cillum aliqua consequat. Consequat consectetur reprehenderit aute minim labore minim ut commodo pariatur ipsum. In magna Lorem commodo nulla do consequat amet. Fugiat nisi sint voluptate pariatur pariatur pariatur cillum velit amet labore dolore cillum esse ut. Non pariatur aliquip Lorem quis ut officia minim eiusmod nostrud amet enim esse cillum.",
};

interface Selection {
	size: "small" | "medium" | "large";
	index: 0 | 1 | 2;
}

const SinglePizza = () => {
	const selectionDefault: Selection = {
		size: "small",
		index: 0,
	};

	const [isSelected, setIsSelected] = useState<Selection>(selectionDefault);

	return (
		<div className="container">
			<div className={`container-center ${styles.singlePizzaContainer}`}>
				<div className={styles.imgContainer}>
					<Image
						src={singleProduct.img}
						alt="pizza"
						width={500}
						height={400}
						objectFit="contain"
					/>
				</div>
				<section className={styles.productInfoContainer}>
					<article className={styles.productInfoHeader}>
						<h1 className={styles.title}>{singleProduct.title}</h1>
						<p className={styles.price}>
							{singleProduct.prices[isSelected.index]}
						</p>
						<p className={styles.description}>{singleProduct.desc}</p>
					</article>
					<article className={styles.sizes}>
						<h1 className={styles.sizesTitle}>Chose the size</h1>
						<div className={styles.sizesContainer}>
							<div
								className={styles.sizeIconContainer}
								onClick={() => setIsSelected({ size: "small", index: 0 })}
							>
								<Image
									src="/images/size.png"
									width={30}
									height={30}
									alt="pizza-icon"
								/>
								<p
									className={` ${styles.sizeText} ${
										isSelected.size === "small" ? styles.isSelected : null
									}`}
								>
									small
								</p>
							</div>
							<div
								className={styles.sizeIconContainer}
								onClick={() => setIsSelected({ size: "medium", index: 1 })}
							>
								<Image
									src="/images/size.png"
									width={40}
									height={40}
									alt="pizza-icon"
								/>
								<p
									className={` ${styles.sizeText} ${
										isSelected.size === "medium" ? styles.isSelected : null
									}`}
								>
									medium
								</p>
							</div>
							<div
								className={styles.sizeIconContainer}
								onClick={() => setIsSelected({ size: "large", index: 2 })}
							>
								<Image
									src="/images/size.png"
									width={50}
									height={50}
									alt="pizza-icon"
								/>
								<p
									className={` ${styles.sizeText} ${
										isSelected.size === "large" ? styles.isSelected : null
									}`}
								>
									large
								</p>
							</div>
						</div>
					</article>

					<article className={styles.topingsContainer}>
						<h1 className={styles.topingTitle}>
							Choose additional ingredients
						</h1>
						<div className={styles.checkBoxes}>
							<div className={styles.checkBox}>
								<input type="checkbox" name="double topings" />
								<label htmlFor="double topings">Double topings</label>
							</div>

							<div className={styles.checkBox}>
								<input type="checkbox" name="extra cheese" />
								<label htmlFor="extra cheese">extra cheese</label>
							</div>

							<div className={styles.checkBox}>
								<input type="checkbox" name="spicy sauce" />
								<label htmlFor="spicy sauce">spicy sauce</label>
							</div>

							<div className={styles.checkBox}>
								<input type="checkbox" name="garlic sauce" />
								<label htmlFor="garlic sauce">garlic sauce</label>
							</div>
						</div>
					</article>

					<article className={styles.addCartContainer}>
						<input
							type="number"
							className={styles.numberCart}
							min="1"
							max="20"
							defaultValue={1}
						/>
						<button className={styles.btnCart}>Add to cart</button>
					</article>
				</section>
			</div>
		</div>
	);
};
export default SinglePizza;
