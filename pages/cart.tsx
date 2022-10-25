import { useEffect, useState } from "react";
import CheckoutCart from "../components/checkoutCart/CheckoutCart";
import { PaypalBtn, CashOnDeliveryBtn } from "../components";

import Image from "next/image";

import { useAppSelector } from "../redux/hooks";

import styles from "../styles/cart.module.css";

function Cart() {
	const [isCheckout, setIsCheckout] = useState<boolean>(false);
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
					<>
						{!isCheckout ? (
							<button
								className={styles.checkoutBtn}
								onClick={() => setIsCheckout(true)}
							>
								checkout
							</button>
						) : (
							<>
								<CashOnDeliveryBtn />
								<PaypalBtn></PaypalBtn>
							</>
						)}
					</>
				</CheckoutCart>
			</div>
		</section>
	);
}

export default Cart;
