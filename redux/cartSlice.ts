import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartOrder, OrderSingle } from "../interface/order";

const initialState: CartOrder = {
	products: [],

	quantity: 0,
	total: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<OrderSingle>) => {
			state.products?.push(action.payload);
			state.total += action.payload.total;
			// state.total += action.payload.price * action.payload.quantity;
			// state.quantity = state.products?.length || 0;
			state.quantity += 1;
		},
		resetCart: (state) => {
			state = initialState;
		},
	},
});

export const { addProduct, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
