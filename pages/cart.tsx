import { useEffect } from "react";
import Image from "next/image";

import styles from "../styles/cart.module.css";
import CheckoutCart from "../components/checkoutCart/CheckoutCart";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

// const order = [
// {
// 	orderId: "abc12",
// 	image: "/images/pizza05.png",
// 	name: "neapolitan",
// 	price: 29.9,
// 	extras: ["spyce souce", "double ingredients"],
// 	quantity: 2,
// },
// {
// 	orderId: "gsdf23",
// 	image: "/images/pizza04.png",
// 	name: "calabreza",
// 	price: 29.9,
// 	extras: ["extra cheese", "double ingredients"],
// 	quantity: 1,
// },
// ];

function Cart() {
	const cart = useAppSelector((state) => state.cart);
	console.log(cart, "from cart");

	return (
		<section className={` container ${styles.orderCartContainer}`}>
			<div className={`container-center ${styles.orderCart}`}>
				<table className={styles.table}>
					{/* header */}
					<thead>
						<tr className={styles.row}>
							<th className={styles.cell}>product</th>
							<th className={styles.cell}>name</th>
							<th className={styles.cell}>extras</th>
							<th className={styles.cell}>quantity</th>
							<th className={styles.cell}>price</th>
							<th className={styles.cell}>total</th>
						</tr>
					</thead>

					{/* products */}
					<tbody>
						{cart.products?.map((product) => {
							return (
								<tr key={product._id}>
									<td className={styles.productCell}>
										<Image
											src={product.img || ""}
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
									<td className={styles.productCell}>${product.price},00</td>
									<td className={styles.productCell}>{`$${
										product.quantity * product.price
									},00`}</td>
								</tr>
							);
						})}
					</tbody>
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
