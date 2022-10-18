import { useRouter } from "next/router";

import { useLanguage } from "../../context/Language/LanguageContext";

import { AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";

import styles from "./navbar.module.css";

export const Navbar = () => {
	const { languageTexts } = useLanguage();

	// provisory data
	const orderID = "absadsd324234";

	const router = useRouter();

	const goToCheckout = () => {
		router.push(`/cart`);
	};

	return (
		<nav className={`container ${styles.navbar}`}>
			<div className={`container-center ${styles.navCenter}`}>
				<div className={styles.order}>
					<div className={styles.orderPhone}>
						<AiOutlinePhone className={styles.phoneIcon} />
					</div>
					<div className={styles.orderTextContainer}>
						<p>{languageTexts.navbar.order.text}</p>
						<p>{languageTexts.navbar.order.phone}</p>
					</div>
				</div>
				<ul className={styles.menu}>
					<li>{languageTexts.navbar.menu[0]}</li>
					<li>{languageTexts.navbar.menu[1]}</li>
					<li>{languageTexts.navbar.menu[2]}</li>
					<li className={styles.logo}>DonDani</li>
					<li>{languageTexts.navbar.menu[3]}</li>
					<li>{languageTexts.navbar.menu[4]}</li>
					<li>{languageTexts.navbar.menu[5]}</li>
				</ul>
				<div className={styles.cart}>
					<AiOutlineShoppingCart
						className={styles.cartIcon}
						onClick={() => goToCheckout()}
					/>
					<div className={styles.cartNumber}>1</div>
				</div>
			</div>
		</nav>
	);
};
