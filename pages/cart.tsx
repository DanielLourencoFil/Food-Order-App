//REACT
import { useState } from "react";
import CheckoutCart from "../components/checkoutCart/CheckoutCart";

//NEXT
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next";

//REDUX
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { resetCart } from "../redux/cartSlice";

//AXIOS
import axios from "axios";

//COMPOMENTS
import {
	PaypalBtn,
	CashOnDeliveryBtn,
	CashPaymentClientDetails,
} from "../components";

//INTERFACE
import { OrderSubmitedBasic } from "../interface/order";

//CSS
import styles from "../styles/cart.module.css";

const Cart: NextPage = () => {
	const [isCheckout, setIsCheckout] = useState<boolean>(false);
	const [isCash, setIsCash] = useState<boolean>(false);
	const cart = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const createOrder = async (data: OrderSubmitedBasic) => {
		try {
			const res = await axios.post("http://localhost:3000/api/orders", data);
			res.status === 201 && router.push("/order/" + res.data._id);
			dispatch(resetCart());
		} catch (error) {
			console.log(error);
		}
	};
	if (cart.total === 0) {
		return (
			<section className={` container ${styles.orderCartContainer}`}>
				<div
					className={`container-center ${styles.orderCart}`}
					style={{ alignItems: "center", justifyContent: "center" }}
				>
					<h1>Your cart is empty, please order something!</h1>
				</div>
			</section>
		);
	}
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
				<CheckoutCart total={cart.total}>
					<>
						{!isCheckout ? (
							<button
								className={styles.checkoutBtn}
								onClick={() => setIsCheckout(true)}
							>
								checkout now
							</button>
						) : (
							<>
								<CashOnDeliveryBtn setIsCash={setIsCash} />
								<PaypalBtn cart={cart} createOrder={createOrder} />
							</>
						)}
					</>
				</CheckoutCart>
			</div>
			{isCash && (
				<CashPaymentClientDetails
					setIsCash={setIsCash}
					isCash={isCash}
					createOrder={createOrder}
				/>
			)}
		</section>
	);
};

export default Cart;
