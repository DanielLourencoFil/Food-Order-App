import { useState } from "react";

import Image from "next/image";

import CheckoutCart from "../../components/checkoutCart/CheckoutCart";

import styles from "../../styles/order.module.css";

export const Order = () => {
	// status: 0 - not ready
	// 1 - starting
	// 2 - done

	const orderStatus = {
		payment: 2,
		preparing: 1,
		onWay: 0,
		delivered: 0,
	};
	const [isChecked, setIsChecked] = useState(orderStatus);

	const order = {
		orderId: "abc12",
		customer: "John Doe",
		adress: "San Martin St, 4879",
		total: 29.9,
	};

	return (
		<section className={` container ${styles.orderCartContainer}`}>
			<div className={`container-center ${styles.orderCart}`}>
				<div className={styles.orderInfoContainer}>
					<table className={styles.table}>
						{/* header */}
						<tr className={styles.row}>
							<th className={styles.cell}>Order ID</th>
							<th className={styles.cell}>Customer</th>
							<th className={styles.cell}>Adress</th>
							<th className={styles.cell}>Total</th>
						</tr>
						<tr className={styles.cell}>
							<td className={styles.cell}>{order.orderId}</td>
							<td className={styles.cell}>{order.customer}</td>
							<td className={styles.cell}>{order.adress}</td>
							<td className={styles.cell}>{order.total}</td>
						</tr>
					</table>
					{/* order progress icons */}
					<div className={styles.orderIconsContainer}>
						<div
							className={`${styles.iconContainer} ${
								orderStatus.payment === 1 && styles.starting
							} ${orderStatus.payment === 0 && styles.notReady}`}
						>
							<Image
								src="/images/paid.png"
								width={40}
								height={40}
								alt={"payment-icon"}
								objectFit="contain"
							/>
							<p>Payment</p>
							<Image
								src="/images/checked.png"
								width={20}
								height={20}
								alt="checked-icon"
								objectFit="contain"
								className={`${styles.checkedIcon} ${
									isChecked.payment === 2 ? styles.showIcon : null
								}`}
							/>
						</div>
						<div
							className={`${styles.iconContainer} ${
								orderStatus.preparing === 1 && styles.starting
							} ${orderStatus.preparing === 0 && styles.notReady}`}
						>
							<Image
								src="/images/bake.png"
								width={40}
								height={40}
								alt="payment-icon"
								objectFit="contain"
							/>
							<p>Preparing</p>
							<Image
								src="/images/checked.png"
								width={20}
								height={20}
								alt="cocking-icon"
								objectFit="contain"
								className={`${styles.checkedIcon} ${
									isChecked.preparing === 2 ? styles.showIcon : null
								}`}
							/>
						</div>
						<div
							className={`${styles.iconContainer} ${
								orderStatus.onWay === 1 && styles.starting
							} ${orderStatus.onWay === 0 && styles.notReady}`}
						>
							<Image
								src="/images/bike.png"
								width={40}
								height={40}
								alt={"bike-icon"}
								objectFit="contain"
							/>
							<p>On the way</p>
							<Image
								src="/images/checked.png"
								width={20}
								height={20}
								alt="checked-icon"
								objectFit="contain"
								className={`${styles.checkedIcon} ${
									isChecked.onWay === 2 ? styles.showIcon : null
								}`}
							/>
						</div>
						<div
							className={`${styles.iconContainer} ${
								orderStatus.delivered === 1 && styles.starting
							} ${orderStatus.delivered === 0 && styles.notReady}`}
						>
							<Image
								src="/images/delivered.png"
								width={40}
								height={40}
								alt={"payment-icon"}
								objectFit="contain"
							/>
							<p>Delivered</p>
							<Image
								src="/images/checked.png"
								width={20}
								height={20}
								alt="checked-icon"
								objectFit="contain"
								className={`${styles.checkedIcon} ${styles.checkedIcon} ${
									isChecked.delivered === 2 ? styles.showIcon : null
								}`}
							/>
						</div>
					</div>
				</div>

				{/* CART TOTAL */}
				<CheckoutCart>
					<button className={styles.orderBtn}>paid</button>
				</CheckoutCart>
			</div>
		</section>
	);
};
export default Order;
