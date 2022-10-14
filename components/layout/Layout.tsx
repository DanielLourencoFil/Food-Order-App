import { ReactNode } from "react";
import Head from "next/head";

import styles from "./layout.module.css";
import { Navbar, Footer } from "../../components";

interface Props {
	children: ReactNode;
}

export const Layout = ({ children }: Props) => {
	return (
		<div className={styles.container}>
			<Navbar></Navbar>
			{children}
			<Footer></Footer>
		</div>
	);
};
