export interface Language {
	navbar: {
		order: {
			text: string;
			phone: string;
		};
		menu: string[];
	};
	hero: {
		slide01: string[];
		slide02: string[];
		slide03: string[];
	};
	pizzaCardSection: {
		title: string;
		desc: string;
		pizzaCard: {
			tittle: string;
			price: string;
			desc: string;
		};
	};
	footer: {
		moto: string;
		adress: {
			title: string;
			places: [
				{ adress: string[] },
				{ adress: string[] },
				{ adress: string[] },
				{ adress: string[] }
			];
		};

		hours: {
			title: string;
			times: [{ time: string[] }, { time: string[] }];
		};
	};
}

export type LanguagesTypes = "portugues" | "english";
