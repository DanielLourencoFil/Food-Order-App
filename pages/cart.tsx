import { useEffect, useState } from "react";
import CheckoutCart from "../components/checkoutCart/CheckoutCart";
import { PaypalBtn, CashOnDeliveryBtn } from "../components";

import Image from "next/image";
import { useRouter } from "next/router";

import axios from "axios";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { resetCart } from "../redux/cartSlice";

import styles from "../styles/cart.module.css";

function Cart() {
	const [isCheckout, setIsCheckout] = useState<boolean>(false);
	const cart = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const createOrder = async (data: any) => {
		console.log(data, "from createOrder func");

		try {
			const res = await axios.post("http://localhost:3000/api/orders", data);
			res.status === 201 && router.push("/order/" + res.data._id);
			dispatch(resetCart());
		} catch (error) {
			console.log(error);
		}
	};

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
								<PaypalBtn cart={cart} createOrder={createOrder} />
							</>
						)}
					</>
				</CheckoutCart>
			</div>
		</section>
	);
}

export default Cart;
