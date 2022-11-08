import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const { username, password } = req.body;

		if (
			username === process.env.ADMIN_USERNAME &&
			password === process.env.ADMIN_PASSWORD
		) {
			res.setHeader(
				"Set-cookie",
				cookie.serialize("token", process.env.TOKEN, {
					maxAge: 60 * 60,
					sameSite: "strict",
					path: "/",
				})
			);
		}
		res.status(200).json("succesfull");
	} else {
		res.status(200).json("wrong credentials");
	}
};

export default handler;
