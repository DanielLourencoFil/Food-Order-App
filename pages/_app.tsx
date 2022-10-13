import type { AppProps } from "next/app";

import { Layout } from "../components";
import { LanguageProvider } from "../context";

import "../styles/globals.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LanguageProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</LanguageProvider>
	);
}

export default MyApp;
