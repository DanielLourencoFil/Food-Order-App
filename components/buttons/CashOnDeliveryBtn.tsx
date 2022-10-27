import React from "react";
import styles from "./cashOnDeliveryBtn.module.css";

interface BtnProps {
	setIsCash: (value: boolean) => void;
}

export const CashOnDeliveryBtn = ({ setIsCash }: BtnProps) => {
	return (
		<button className={styles.btn} onClick={() => setIsCash(true)}>
			Cash On Delivery
		</button>
	);
};
