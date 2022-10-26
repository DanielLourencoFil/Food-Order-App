import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
	{
		customer: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
		status: {
			type: Number,
			required: true,
			default: 0,
		},
		method: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);

// orderId: {
// 	type: String,
// 	required: true,
// },
// orderStatus: {
// 	type: {
// 		payment: { type: Number, default: 0 },
// 		preparing: { type: Number, default: 0 },
// 		onWay: { type: Number, default: 0 },
// 		delivered: { type: Number, default: 0 },
// 	},
// 	required: true,
// },
