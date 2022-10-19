import React from "react";
import Image from "next/image";

import styles from "../styles/cart.module.css";
import CheckoutCart from "../components/checkoutCart/CheckoutCart";

const order = [
	{
		orderId: "abc12",
		image: "/images/pizza05.png",
		name: "neapolitan",
		price: 29.9,
		extras: ["spyce souce", "double ingredients"],
		quantity: 2,
	},
	{
		orderId: "gsdf23",
		image: "/images/pizza04.png",
		name: "calabreza",
		price: 29.9,
		extras: ["extra cheese", "double ingredients"],
		quantity: 1,
	},
];

function Cart() {
	return (
		<section className={` container ${styles.orderCartContainer}`}>
			<div className={`container-center ${styles.orderCart}`}>
				<table className={styles.table}>
					{/* header */}
					<tr className={styles.row}>
						<th className={styles.cell}>product</th>
						<th className={styles.cell}>name</th>
						<th className={styles.cell}>extras</th>
						<th className={styles.cell}>price</th>
						<th className={styles.cell}>quantity</th>
						<th className={styles.cell}>total</th>
					</tr>

					{/* products */}
					{order.map((product) => {
						return (
							<tr key={product.orderId}>
								<td className={styles.productCell}>
									<Image
										src={product.image}
										width={125}
										height={125}
										alt="pizza"
										objectFit="contain"
									/>
								</td>
								<td className={styles.name}>{product.name}</td>
								<td className={styles.productCell}>
									{product.extras.join(", ")}
								</td>
								<td className={styles.productCell}>{product.quantity}</td>
								<td className={styles.productCell}>{product.price}</td>
								<td className={styles.productCell}>{`$${
									product.quantity * product.price
								}0`}</td>
							</tr>
						);
					})}
				</table>

				{/* CART TOTAL */}
				<CheckoutCart>
					<button className={styles.checkoutBtn}>checkout</button>
				</CheckoutCart>
			</div>
		</section>
	);
}

export default Cart;
