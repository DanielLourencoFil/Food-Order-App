import { useState } from "react";

import { useAppSelector } from "../../redux/hooks";

import { OrderSubmitedBasic } from "../../interface/order";

import styles from "./cashPaymentClientDetails.module.css";

interface ModalProps {
	setIsCash: (value: boolean) => void;
	createOrder: (data: OrderSubmitedBasic) => void;
	isCash: boolean;
}
interface Client {
	customer: string;
	phone: string;
	address: string;
}

export const CashPaymentClientDetails = ({
	setIsCash,
	isCash,
	createOrder,
}: ModalProps) => {
	const defaultClient: Client = {
		customer: "",
		phone: "",
		address: "",
	};

	const [client, setClient] = useState<Client>(defaultClient);
	const cart = useAppSelector((state) => state.cart);

	const handleCreateOrder = () => {
		const order: OrderSubmitedBasic = {
			customer: client.customer,
			phone: client.phone,
			address: client.address,
			total: cart.total,
			status: 0,
			method: 0,
		};
		createOrder(order);
		setClient(defaultClient);
	};

	return (
		<div className={`${styles.container} ${isCash && styles.openContainer}`}>
			<button className={styles.closeBtn} onClick={() => setIsCash(false)}>
				X
			</button>
			<div className={styles.modal}>
				<h1 className={styles.title}>
					You must pay {<span>${cart.total}</span>} cash when delivered
				</h1>
				<label htmlFor="name">
					name
					<input
						id="name"
						type="text"
						value={client.customer}
						onChange={(e) =>
							setClient((prev) => ({ ...prev, customer: e.target.value }))
						}
					/>
				</label>
				<label htmlFor="phone">
					phone number
					<input
						id="phone"
						type="tel"
						value={client.phone}
						onChange={(e) =>
							setClient((prev) => ({ ...prev, phone: e.target.value }))
						}
					/>
				</label>
				<label htmlFor="address">
					address
					<input
						id="address"
						type="text"
						value={client.address}
						onChange={(e) =>
							setClient((prev) => ({ ...prev, address: e.target.value }))
						}
					/>
				</label>
				<button className={styles.confirmBtn} onClick={handleCreateOrder}>
					confirm
				</button>
			</div>
		</div>
	);
};
