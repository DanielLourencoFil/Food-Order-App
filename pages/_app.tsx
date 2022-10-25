import type { AppProps } from "next/app";
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
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</LanguageProvider>
		</Provider>
	);
}

export default MyApp;
