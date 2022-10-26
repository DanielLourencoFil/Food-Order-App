import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../../utils/mongo";

import Order from "../../../models/Order";
import { log } from "console";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	await dbConnect();

	if (method === "GET") {
		try {
			const orders = await Order.find();
			res.status(200).json(orders);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	if (method === "POST") {
		console.log(req.body);
		console.log(req.headers);

		try {
			const order = await Order.create(req.body);
			res.status(201).json(order);
		} catch (error) {
			res.status(500).json(error);
		}
	}
};
export default handler;
