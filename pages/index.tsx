import type { NextPage } from "next";
import { GetServerSideProps } from "next";

import Head from "next/head";
import { useLanguage } from "../context/Language/LanguageContext";

import { ChangeLanguageBtn } from "../components/buttons/ChangeLanguageBtn";
import { Hero, PizzaCardSection } from "../components";

import axios from "axios";

const Home: NextPage = ({ pizzaList }: any) => {
	const { languageTexts, currentLanguage, setCurrentLanguage } = useLanguage();

	return (
		<>
			<Head>
				<title>Pizzaria DonDani</title>
				<meta name="description" content="Best pizza in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Hero />
				<PizzaCardSection pizzaList={pizzaList} />
				{/* <ChangeLanguageBtn language="english" text="EN" />
				<ChangeLanguageBtn language="portugues" text="BR" /> */}
			</div>
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const res = await axios.get("http://localhost:3000/api/products");

	return {
		props: {
			pizzaList: res.data,
		},
	};
};
