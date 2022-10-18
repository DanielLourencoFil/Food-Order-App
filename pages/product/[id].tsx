import React from "react";
import Image from "next/image";
import styles from "../../styles/singlePizza.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const singleProduct = {
	id: 1,
	img: "/images/pizza-card.png",
	title: "neapolitane",
	prices: [19.9, 25.9, 30.9],
	desc: "Elit laborum consequat proident aute consequat cillum aliqua consequat. Consequat consectetur reprehenderit aute minim labore minim ut commodo pariatur ipsum. In magna Lorem commodo nulla do consequat amet. Fugiat nisi sint voluptate pariatur pariatur pariatur cillum velit amet labore dolore cillum esse ut. Non pariatur aliquip Lorem quis ut officia minim eiusmod nostrud amet enim esse cillum.",
};

const SinglePizza = () => {
	const [isSelected, setIsSelected] = useState<0 | 1 | 2>(0);

	const { query } = useRouter();
	console.log(query.id);

	return (
		<div className="container">
			<div className={`container-center ${styles.singlePizzaContainer}`}>
				{/* PIZZA IMAGE */}
				<div className={styles.imgContainer}>
					<Image
						src={singleProduct.img}
						alt="pizza"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				{/* PIZZA INFO */}
				<section className={styles.productInfoContainer}>
					{/* info header */}
					<article className={styles.productInfoHeader}>
						<h1 className={styles.title}>{singleProduct.title}</h1>
						<p className={styles.price}>${singleProduct.prices[isSelected]}0</p>
						<p className={styles.description}>{singleProduct.desc}</p>
					</article>

					{/* SIZES */}
					<article className={styles.sizes}>
						<h1 className={styles.sizesTitle}>Chose the size</h1>
						<div className={styles.sizesContainer}>
							<div
								className={styles.sizeIconContainer}
								onClick={() => setIsSelected(0)}
							>
								<Image
									src="/images/size.png"
									width={30}
									height={30}
									alt="pizza-icon"
								/>
								<p
									className={` ${styles.sizeText} ${
										isSelected === 0 ? styles.isSelected : null
									}`}
								>
									small
								</p>
							</div>
							<div
								className={styles.sizeIconContainer}
								onClick={() => setIsSelected(1)}
							>
								<Image
									src="/images/size.png"
									width={40}
									height={40}
									alt="pizza-icon"
								/>
								<p
									className={` ${styles.sizeText} ${
										isSelected === 1 ? styles.isSelected : null
									}`}
								>
									medium
								</p>
							</div>
							<div
								className={styles.sizeIconContainer}
								onClick={() => setIsSelected(2)}
							>
								<Image
									src="/images/size.png"
									width={50}
									height={50}
									alt="pizza-icon"
								/>
								<p
									className={` ${styles.sizeText} ${
										isSelected === 2 ? styles.isSelected : null
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
							<div className={styles.checkBox}>
								<input type="checkbox" name="double" id="double" />
								<label htmlFor="double">Double topings</label>
							</div>

							<div className={styles.checkBox}>
								<input type="checkbox" name="extra" id="extra" />
								<label htmlFor="extra">extra cheese</label>
							</div>

							<div className={styles.checkBox}>
								<input type="checkbox" name="spicy" id="spicy" />
								<label htmlFor="spicy">spicy sauce</label>
							</div>

							<div className={styles.checkBox}>
								<input type="checkbox" name="garlic" id="garlic" />
								<label htmlFor="garlic">garlic sauce</label>
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
