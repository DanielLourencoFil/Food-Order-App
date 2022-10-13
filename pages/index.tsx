import type { NextPage } from "next";
import Head from "next/head";
import { useLanguage } from "../context/Language/LanguageContext";

import { ChangeLanguageBtn } from "../components/buttons/ChangeLanguageBtn";
import { Hero } from "../components";

const Home: NextPage = () => {
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
				<ChangeLanguageBtn language="english" text="EN" />
				<ChangeLanguageBtn language="portugues" text="BR" />
			</div>
		</>
	);
};

export default Home;
