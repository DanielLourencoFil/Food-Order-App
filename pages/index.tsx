import { useState, useEffect } from "react";

import type { NextPage } from "next";
import { GetServerSideProps } from "next";

import Head from "next/head";

// context
import { useLanguage } from "../context/Language/LanguageContext";
import { useAppDispatch } from "../redux/hooks";

import { ChangeLanguageBtn } from "../components/buttons/ChangeLanguageBtn";
import {
	Hero,
	PizzaCardSection,
	AddPizzaBtn,
	AddPizzaModal,
} from "../components";

import axios from "axios";
import { login } from "../redux/generics";

const Home: NextPage = ({ pizzaList, admin }: any) => {
	const [open, setOpen] = useState<boolean>(false);
	const { languageTexts, currentLanguage, setCurrentLanguage } = useLanguage();

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(login(admin));
	});

	return (
		<>
			<Head>
				<title>Pizzaria DonDani</title>
				<meta name="description" content="Best pizza in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<div className={`container-center`}>
				{/* {admin && <AddPizzaBtn setOpen={setOpen} />} */}
				<PizzaCardSection pizzaList={pizzaList} />
				{/* {open && <AddPizzaModal setOpen={setOpen} open={open} />} */}
				{/* <ChangeLanguageBtn language="english" text="EN" />
				<ChangeLanguageBtn language="portugues" text="BR" /> */}
			</div>
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const token = ctx?.req.cookies.token;
	let admin = token === process.env.TOKEN;

	const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/products`);

	return {
		props: {
			pizzaList: res.data,
			admin,
		},
	};
};
