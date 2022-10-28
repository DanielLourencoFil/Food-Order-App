// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../utils/mongo";
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		method,
		body,
		query: { id },
	} = req;

	await dbConnect();

	if (method === "GET") {
		try {
			const product = await Product.findById(id);
			res.status(200).json(product);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	if (method === "PUT") {
		try {
			const product = Product.create(body);
			res.status(201).json("product created");
		} catch (error) {
			res.status(500).json({ error });
		}
	}
	if (method === "DELETE") {
		try {
			await Product.findByIdAndDelete(id);
			res.status(200).json("product deleted");
		} catch (error) {
			res.status(500).json({ error });
		}
	}
}
