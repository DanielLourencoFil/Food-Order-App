import React from "react";
import Image from "next/image";
import styles from "../../styles/singlePizza.module.css";

const singleProduct = {
	id: 1,
	img: "/images/pizza-card.png",
	title: "campagnola",
	price: [19.9, 25.9, 30.9],
	desc: "Elit laborum consequat proident aute consequat cillum aliqua consequat. Consequat consectetur reprehenderit aute minim labore minim ut commodo pariatur ipsum. In magna Lorem commodo nulla do consequat amet. Fugiat nisi sint voluptate pariatur pariatur pariatur cillum velit amet labore dolore cillum esse ut. Non pariatur aliquip Lorem quis ut officia minim eiusmod nostrud amet enim esse cillum.",
};

const SinglePizza = () => {
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
				<div className={styles.productInfoContainer}>
					<div className={styles.productInfoHeader}>
						<h1 className={styles.title}>{singleProduct.title}</h1>
						<p className={styles.price}>{singleProduct.price}</p>
						<p className={styles.description}>{singleProduct.desc}</p>
					</div>
					<div className={styles.sizes}>
						<h1 className={styles.sizesTitle}>Chose the size</h1>
						<div className={styles.sizesContainer}>
							<div className={styles.sizeIconContainer}>
								<Image
									src="/images/size.png"
									width={30}
									height={30}
									alt="pizza-icon"
								/>
								<p className={styles.sizeText}>small</p>
							</div>
							<div className={styles.sizeIconContainer}>
								<Image
									src="/images/size.png"
									width={40}
									height={40}
									alt="pizza-icon"
								/>
								<p className={styles.sizeText}>medium</p>
							</div>
							<div className={styles.sizeIconContainer}>
								<Image
									src="/images/size.png"
									width={50}
									height={50}
									alt="pizza-icon"
								/>
								<p className={styles.sizeText}>big</p>
							</div>
						</div>
					</div>

					<div className={styles.topingsContainer}>
						<h1 className={styles.topingTitle}>
							Choose additional ingredients
						</h1>
						<div className={styles.checkBoxes}>
							<div className={styles.checkBox}>
								<input type="checkbox" name="double topings" />

								<label htmlFor="double topings">Double topings</label>
							</div>
							<div className={styles.checkBox}>
								<input type="checkbox" name="double topings" />

								<label htmlFor="double topings">Double topings</label>
							</div>
							<div className={styles.checkBox}>
								<input type="checkbox" name="double topings" />

								<label htmlFor="double topings">Double topings</label>
							</div>
							<div className={styles.checkBox}>
								<input type="checkbox" name="double topings" />

								<label htmlFor="double topings">Double topings</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SinglePizza;
