import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import generics from "./generics";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		generics,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
