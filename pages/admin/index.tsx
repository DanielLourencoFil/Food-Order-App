//REACT
import { useState } from "react";
import { AddPizzaBtn, AddPizzaModal, EditPizzaModal } from "../../components";

//NEXT
import { GetServerSideProps } from "next";
import Image from "next/image";

//AXIOS
import axios from "axios";

//INTERFACE
import { Pizza, OrderSubmited } from "../../interface";
//CSS
import styles from "../../styles/admin.module.css";

interface AdminProps {
	productsData: Pizza[];
	ordersData: OrderSubmited[];
}
export interface OpenModalProps {
	edit: boolean;
	add: boolean;
}
const Admin = ({ productsData, ordersData }: AdminProps) => {
	const [products, setProducts] = useState<Pizza[]>(productsData);
	const [orders, setOrders] = useState<OrderSubmited[]>(ordersData);
	const [idDisplay, setIdDisplay] = useState({ order: false, product: false });
	const [open, setOpen] = useState<OpenModalProps>({
		edit: false,
		add: false,
	});
	const [editId, setEditId] = useState<string>("");

	const orderStatusText = ["paid", "preparing", "on the way", "delivered"];
	const paymentMethodText = ["cash", "card"];

	const handleIdDisplay = (direction: boolean, type: string) => {
		if (type === "order") {
			setIdDisplay({ ...idDisplay, order: direction });
		}
		if (type === "product") {
			setIdDisplay({ ...idDisplay, product: direction });
		}
	};

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
		setOpen({ edit: true, add: false });
		setEditId(id);
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
		<>
			{open.add && <AddPizzaModal setOpen={setOpen} open={open} />}
			{open.edit && (
				<EditPizzaModal
					setOpen={setOpen}
					open={open}
					pizza={products.find((pizza) => pizza._id === editId)}
				/>
			)}
			<div className="container">
				<div className={` container-center ${styles.adminContainer}`}>
					<section className={styles.adminSection}>
						<div className={styles.addButtonContainer}>
							<h1 className={styles.title}>Products</h1>
							<AddPizzaBtn setOpen={setOpen} />
						</div>
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
											<td
												onMouseOver={() => handleIdDisplay(true, "product")}
												onMouseLeave={() => handleIdDisplay(false, "product")}
												className={`${idDisplay.product ? styles.showId : ""}`}
											>
												{!idDisplay.product
													? product._id.slice(0, 5) + "..."
													: product._id}
											</td>
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
											<td
												onMouseOver={() => handleIdDisplay(true, "order")}
												onMouseLeave={() => handleIdDisplay(false, "order")}
												className={`${idDisplay.order ? styles.showId : ""}`}
											>
												{!idDisplay.order
													? order._id.slice(0, 5) + "..."
													: order._id}
											</td>
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
		</>
	);
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const myCookie = ctx.req?.cookies || "";

	if (myCookie.token !== process.env.TOKEN) {
		return {
			redirect: {
				destination: "/admin/login",
				permanent: false,
			},
		};
	}
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
