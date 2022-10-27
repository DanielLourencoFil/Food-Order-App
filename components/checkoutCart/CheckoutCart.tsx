import { ReactNode } from "react";

import styles from "./checkoutCart.module.css";
import { useAppSelector } from "../../redux/hooks";

interface Props {
	children: ReactNode;
	total: number;
}

const CheckoutCart = ({ children, total }: Props) => {
	// const total = useAppSelector((state) => state.cart.total);
	return (
		<div className={styles.cartTotal}>
			<div className={styles.cartInfoContainer}>
				<h1 className={styles.title}>Cart Total</h1>
				<div className={styles.textContainer}>
					<p className={styles.text}>subtotal:</p>

					<p className={styles.price}>{`$${total},00`}</p>
				</div>
				<div className={styles.textContainer}>
					<p className={styles.text}>discount:</p>
					<p className={styles.price}>{`$${0},00`}</p>
				</div>
				<div className={styles.textContainer}>
					<p className={styles.text}>total:</p>
					<p className={styles.price}>{`$${total},00`}</p>
				</div>
			</div>
			<div className={styles.cartBtnContainer}>{children}</div>
		</div>
	);
};

export default CheckoutCart;
