import type { AppProps } from "next/app";
import Head from "next/head";

import { Provider } from "react-redux";
import store from "../redux/store";

import { Layout } from "../components";
import { LanguageProvider } from "../context";

import "../styles/globals.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<LanguageProvider>
				<Head>
					<title>Pizzaria DonDani</title>
					<meta name="description" content="Best pizza in town" />
					<link rel="icon" href="/images/favicon-32x32.png" />
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</LanguageProvider>
		</Provider>
	);
}

export default MyApp;
