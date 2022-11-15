import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	login: false,
};

export const generics = createSlice({
	name: "generics",
	initialState: initialState,
	reducers: {
		login: (state, action) => {
			state.login = action.payload;
		},
	},
});

export const { login } = generics.actions;

export default generics.reducer;
