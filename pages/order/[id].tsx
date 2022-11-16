import { useState } from "react";

import Image from "next/image";
import { GetServerSideProps } from "next";

import axios from "axios";

import CheckoutCart from "../../components/checkoutCart/CheckoutCart";

import styles from "../../styles/order.module.css";
import { OrderSubmited } from "../../interface/order";

interface Props {
	order: OrderSubmited;
}

export const Order = ({ order }: Props) => {
	// order.status:
	// 0 - payment
	// 1 - preparing
	// 2 - on the way
	// 3 - delivered

	// const [isChecked, setIsChecked] = useState(order.status);

	return (
		<section className={` container ${styles.orderCartContainer}`}>
			<div className={`container-center ${styles.orderCart}`}>
				<div className={styles.orderInfoContainer}>
					<table className={styles.table}>
						{/* header */}
						<thead>
							<tr className={styles.row}>
								<th className={styles.cell}>Order ID</th>
								<th className={styles.cell}>Customer</th>
								<th className={styles.cell}>Address</th>
								<th className={styles.cell}>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr className={styles.cell}>
								<td className={styles.cell}>{order._id}</td>
								<td className={styles.cell}>{order.customer}</td>
								<td className={styles.cell}>{order.address}</td>
								<td className={styles.cell}>{order.total}</td>
							</tr>
						</tbody>
					</table>
					{/* order progress icons */}
					<div className={styles.orderIconsContainer}>
						<div className={`${styles.iconContainer} `}>
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
								className={`${styles.checkedIcon} ${styles.showIcon}`}
							/>
						</div>
						<div
							className={`${styles.iconContainer} ${
								order.status === 0 && styles.starting
							} `}
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
									order.status >= 1 && styles.showIcon
								}`}
							/>
						</div>
						<div
							className={`${styles.iconContainer} ${
								order.status === 1 && styles.starting
							} ${order.status === 0 && styles.notReady}`}
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
									order.status >= 2 && styles.showIcon
								}`}
							/>
						</div>

						<div
							className={`${styles.iconContainer} ${
								order.status === 2 && styles.starting
							} ${order.status <= 1 && styles.notReady}`}
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
									order.status >= 3 && styles.showIcon
								}`}
							/>
						</div>
					</div>
				</div>

				{/* CART TOTAL */}
				<CheckoutCart total={order.total}>
					<button className={styles.orderBtn}>paid</button>
				</CheckoutCart>
			</div>
		</section>
	);
};
export default Order;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const res = await axios.get(
		`${process.env.NEXT_PUBLIC_URL}/api/orders/${params?.id}`
	);
	return {
		props: {
			order: res.data,
		},
	};
};
