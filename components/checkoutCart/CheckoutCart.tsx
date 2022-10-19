import { ReactNode } from "react";

import styles from "./checkoutCart.module.css";

interface Props {
	children: ReactNode;
}

const CheckoutCart = ({ children }: Props) => {
	return (
		<div className={styles.cartTotal}>
			<h1 className={styles.title}>Cart Total</h1>
			<div className={styles.textContainer}>
				<p className={styles.text}>subtotal:</p>

				<p className={styles.price}>{`$${120.9}0`}</p>
			</div>
			<div className={styles.textContainer}>
				<p className={styles.text}>discount:</p>
				<p className={styles.price}>{`$${0}00`}</p>
			</div>
			<div className={styles.textContainer}>
				<p className={styles.text}>total:</p>
				<p className={styles.price}>{`$${120.9}0`}</p>
			</div>
			{children}
		</div>
	);
};

export default CheckoutCart;
