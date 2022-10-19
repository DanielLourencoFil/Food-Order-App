import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			maxlength: 60,
		},
		img: {
			type: String,
			required: true,
		},
		prices: {
			type: [Number, Number, Number],
			required: true,
		},
		desc: {
			type: String,
			required: true,
			maxLenght: 300,
		},
		extraOptions: {
			type: [
				{
					topping: {
						type: String,
						required: true,
						maxlength: 100,
					},
					price: {
						type: [Number, Number, Number],
						required: true,
					},
				},
			],
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Product ||
	mongoose.model("Product", ProductSchema);
