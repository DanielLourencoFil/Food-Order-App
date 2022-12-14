import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../../utils/mongo";

import Order from "../../../models/Order";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const {
		method,
		query: { id },
	} = req;

	await dbConnect();

	if (method === "GET") {
		try {
			const order = await Order.findById(id);
			res.status(200).json(order);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	if (method === "PUT") {
		try {
			const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
			console.log(order);

			res.status(200).json(order);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	if (method === "DELETE") {
	}
};
export default handler;
