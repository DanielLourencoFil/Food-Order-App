import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import Login from "../admin/login";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const TOKEN: string = process.env.TOKEN || "";
	const { username, password } = req.body;

	if (req.method === "POST") {
		console.log(
			username == process.env.ADMIN_USERNAME &&
				password == process.env.ADMIN_PASSWORD
		);

		if (
			username === process.env.ADMIN_USERNAME &&
			password === process.env.ADMIN_PASSWORD
		) {
			res.setHeader(
				"Set-cookie",
				cookie.serialize("token", TOKEN, {
					maxAge: 60 * 60,
					sameSite: "strict",
					path: "/",
				})
			);
			res.status(200).json("succesfull");
		} else {
			res.status(400).json("wrong credentials");
		}
	}
};

export default handler;
