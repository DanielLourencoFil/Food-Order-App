//REACT
import { useState } from "react";

//NEXT
import { GetServerSideProps } from "next";
import { NextPage } from "next";
import Image from "next/image";

//AXIOS
import axios from "axios";

//INTERFACE
import { Pizza, OrderSubmited } from "../../../interface";
//CSS
import styles from "../styles/admin.module.css";

interface AdminProps {
	productsData: Pizza[];
	ordersData: OrderSubmited[];
}

const Admin = ({ productsData, ordersData }: AdminProps) => {
	const [products, setProducts] = useState<Pizza[]>(productsData);
	const [orders, setOrders] = useState<OrderSubmited[]>(ordersData);
	const orderStatusText = ["paid", "preparing", "on the way", "delivered"];
	const paymentMethodText = ["cash", "card"];

	const handleStatus = async (id: string) => {
		const order = orders.find((order) => order._id === id);

		if (order) {
			const currentStatus = order.status;
			if (currentStatus >= 3) return;
			try {
				const res = await axios.put(
					`${process.env.NEXT_PUBLIC_URL}/api/orders/` + id,
					{
						status: currentStatus + 1,
					}
				);

				setOrders([res.data, ...orders.filter((order) => order._id !== id)]);
			} catch (error) {
				console.log(error);
			}
		}
	};
	const handleEdit = async (id: string) => {
		// try {
		// 	const res = await axios.put(`${process.env.NEXT_PUBLIC_URL}/api/orders/` + id);
		// } catch (error) {}
	};
	const handleDelete = async (id: string) => {
		try {
			await axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/products/` + id);
			setProducts((prev) => prev.filter((item) => item._id !== id));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className={` container-center ${styles.adminContainer}`}>
				<section className={styles.adminSection}>
					<h1 className={styles.title}>Products</h1>
					<table className={styles.table}>
						<thead>
							<tr className={styles.trTitle}>
								<th>image</th>
								<th>id</th>
								<th>title</th>
								<th>prices</th>
								<th>action</th>
							</tr>
						</thead>
						<tbody>
							{products?.map((product) => {
								return (
									<tr className={styles.trTitle} key={product._id}>
										<td>
											<Image
												src={product.img}
												alt="pizza"
												height={50}
												width={50}
											/>
										</td>
										<td>{product._id.slice(0, 5) + "..."}</td>
										<td>{product.title}</td>
										<td>{product.prices.join(", ")}</td>
										<td className={styles.btnContainer}>
											<button
												className={styles.btn}
												onClick={() => handleEdit(product._id)}
											>
												edit
											</button>
											<button
												className={styles.btn}
												onClick={() => handleDelete(product._id)}
											>
												delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</section>

				<section className={styles.adminSection}>
					<h1 className={styles.title}>Orders</h1>
					<table className={styles.table}>
						<thead>
							<tr className={styles.trTitle}>
								<th>id</th>
								<th>customer</th>
								<th>total</th>
								<th>payment</th>
								<th>status</th>
								<th>action</th>
							</tr>
						</thead>
						<tbody>
							{orders?.map((order) => {
								return (
									<tr className={styles.trTitle} key={order._id}>
										<td>{order._id.slice(0, 5) + "..."}</td>
										<td>{order.customer}</td>
										<td>{order.total}</td>
										<td>{paymentMethodText[order.method]}</td>
										<td>{orderStatusText[order.status]}</td>
										<td className={styles.btnContainer}>
											<button
												className={styles.btn}
												onClick={() => handleStatus(order._id)}
											>
												next
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</section>
			</div>
		</div>
	);
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const resProducts = await axios.get(
		`${process.env.NEXT_PUBLIC_URL}/api/products`
	);
	const resOrders = await axios.get(
		`${process.env.NEXT_PUBLIC_URL}/api/orders`
	);

	return {
		props: {
			productsData: resProducts.data,
			ordersData: resOrders.data,
		},
	};
};
