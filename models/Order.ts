import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
	{
		orderId: {
			type: String,
			required: true,
		},
		customer: {
			type: String,
			required: true,
		},
		adress: {
			type: String,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
		paymentMethods: {
			type: [String],
			required: true,
		},
		orderStatus: {
			type: {
				payment: { type: Number, default: 0 },
				preparing: { type: Number, default: 0 },
				onWay: { type: Number, default: 0 },
				delivered: { type: Number, default: 0 },
			},
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
