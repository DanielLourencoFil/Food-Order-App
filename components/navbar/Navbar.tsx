import { useRouter } from "next/router";

import { useLanguage } from "../../context/Language/LanguageContext";
import Link from "next/link";

import { AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";

import styles from "./navbar.module.css";
import { useAppSelector } from "../../redux/hooks";
import Login from "../../pages/admin/login";

export const Navbar = () => {
	const { languageTexts } = useLanguage();

	const cart = useAppSelector((store) => store.cart);
	const login = useAppSelector((store) => store.generics.login);

	const router = useRouter();

	const goToCheckout = () => {
		router.push(`/cart`);
	};

	const handleDashboard = () => {
		router.push("/admin");
	};

	return (
		<nav className={`container ${styles.navbar}`}>
			{login && (
				<button
					className={styles.adminDashboard}
					onClick={() => handleDashboard()}
				>
					Dashboard
				</button>
			)}

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
					<li>
						<Link href="/">{languageTexts.navbar.menu[0]}</Link>
					</li>
					<li>{languageTexts.navbar.menu[1]}</li>
					<li>{languageTexts.navbar.menu[2]}</li>
					<li className={styles.logo}>
						<Link href={"/"}> DonDani </Link>
					</li>
					<li>{languageTexts.navbar.menu[3]}</li>
					<li>{languageTexts.navbar.menu[4]}</li>
					<li>{languageTexts.navbar.menu[5]}</li>
				</ul>
				<div className={styles.cart}>
					<AiOutlineShoppingCart
						className={styles.cartIcon}
						onClick={() => goToCheckout()}
					/>
					{cart.quantity > 0 && (
						<span className={styles.cartNumber}>{cart.quantity}</span>
					)}
				</div>
			</div>
		</nav>
	);
};
