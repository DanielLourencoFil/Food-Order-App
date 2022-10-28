import { useEffect } from "react";
import {
	PayPalScriptProvider,
	PayPalButtons,
	usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

// This values are the props in the UI
// const amount = "2";
const currency = "EUR";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, cart, createOrder }) => {
	const amount = cart.total;

	// usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
	// This is the main reason to wrap the PayPalButtons in a new component
	const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
		dispatch({
			type: "resetOptions",
			value: {
				...options,
				currency: currency,
			},
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currency, showSpinner]);

	return (
		<>
			{showSpinner && isPending && <div className="spinner" />}
			<PayPalButtons
				style={style}
				disabled={false}
				forceReRender={[amount, currency, style]}
				fundingSource={undefined}
				createOrder={(data, actions) => {
					return actions.order
						.create({
							purchase_units: [
								{
									amount: {
										currency_code: currency,
										value: amount,
									},
								},
							],
						})
						.then((orderId) => {
							// Your code here after create the order
							return orderId;
						});
				}}
				onApprove={function (data, actions) {
					return actions.order.capture().then(function (details) {
						// Your code here after capture the order
						const shipping = details.purchase_units[0].shipping;
						const order = {
							customer: shipping.name.full_name,
							phone: shipping.phone_number.national_number,
							address: `${shipping.address.address_line_1}, ${shipping.address.admin_area_1}, ${shipping.address.admin_area_2}: ${shipping.address.postal_code}`,
							total: cart.total,
							status: 0,
							method: 1,
						};
						console.log(order);
						createOrder({ ...order });
						// {id, status: "COMPLETED", amount, shipping:[{name:full_name},{address}]
					});
				}}
			/>
		</>
	);
};

export function PaypalBtn({ cart, createOrder }) {
	return (
		<div style={{ maxWidth: "750px" }}>
			<PayPalScriptProvider
				options={{
					"client-id":
						"AalTZb8GpeJx2ZoyXPpA_GHTFlF3qhfqaLkCO84Lt49s5ggKNEAXH3UAGnT06dE6R86TVH6VYPhiKiB_",
					components: "buttons",
					currency: "EUR",
					"disable-funding": "card,mercadopago",
				}}
			>
				<ButtonWrapper
					currency={currency}
					showSpinner={false}
					cart={cart}
					createOrder={createOrder}
				></ButtonWrapper>
			</PayPalScriptProvider>
		</div>
	);
}
