// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../utils/mongo";
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
import { log } from "console";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await dbConnect();

	if (req.method === "GET") {
		try {
			const products = await Product.find();
			res.status(200).json(products);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	if (req.method === "POST") {
		try {
			console.log(req.body);
			const product = Product.create(req.body);
			res.status(201).json("product created");
		} catch (error) {
			res.status(500).json({ error });
		}
	}
}
